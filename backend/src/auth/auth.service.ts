import crypto from 'crypto';
import type { User } from '@prisma/client';
import prisma from '../utilities/db';
import {
    hashPassword,
    comparePasswords,
    generateAccessToken,
    generateRefreshToken,
    hashRefreshToken,
    persistRefreshSession,
    validateRefreshToken,
    revokeRefreshToken,
    revokeAllUserRefreshTokens,
} from './token.service';
import { mailerClient } from './mailer.client';
import type { RegisterInput, VerifyInput, LoginInput } from './auth.validator';

const VERIFICATION_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: User['role'];
}

interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}

interface SessionMeta {
    userAgent?: string;
    ip?: string;
}

export class AuthService {
    // ===== Registration Flow =====
    async startRegistration(data: RegisterInput): Promise<{ success: boolean; message: string }> {
        const { email, name, password } = data;

        const { verificationCode } = await prisma.$transaction(async tx => {
            const [emailMatch, nameMatch] = await Promise.all([
                tx.user.findUnique({ where: { email } }),
                tx.user.findUnique({ where: { name } }),
            ]);

            if (emailMatch?.isVerified) {
                throw new Error('Email already registered');
            }

            if (nameMatch?.isVerified && nameMatch.id !== emailMatch?.id) {
                throw new Error('Username already taken');
            }

            const cleanupTargets = [emailMatch, nameMatch]
                .filter((user): user is User => Boolean(user && !user.isVerified))
                .reduce<User[]>((unique, user) => {
                    if (!unique.some(existing => existing.id === user.id)) {
                        unique.push(user);
                    }
                    return unique;
                }, []);

            for (const pendingUser of cleanupTargets) {
                await tx.validationNumber.deleteMany({ where: { userId: pendingUser.id } });
                await tx.user.delete({ where: { id: pendingUser.id } });
            }

            const hashedPassword = await hashPassword(password);
            const { code, expiration } = this.createVerificationArtifacts();

            await tx.user.create({
                data: {
                    email,
                    name,
                    password: hashedPassword,
                    isVerified: false,
                    role: 'USER',
                    validationNumber: {
                        create: {
                            number: code,
                            expiration,
                            isVerified: false,
                        },
                    },
                },
            });

            return { verificationCode: code };
        });

        await mailerClient.sendVerificationCode(email, verificationCode);

        return {
            success: true,
            message: 'Verification code sent to your email',
        };
    }

    async verifyRegistration(
        data: VerifyInput,
        sessionMeta: SessionMeta
    ): Promise<{ success: boolean; tokens: AuthTokens; user: any }> {
        const { email, code } = data;

        // Find user with validation number
        const verifiedUser = await prisma.$transaction(async tx => {
            const registration = await tx.user.findUnique({
                where: { email },
                include: { validationNumber: true },
            });

            if (!registration || !registration.validationNumber) {
                throw new Error('No verification request found for this email');
            }

            const { validationNumber } = registration;
            const isExpired = Date.now() > Number(validationNumber.expiration);

            if (isExpired) {
                await tx.validationNumber.delete({ where: { userId: registration.id } });
                await tx.user.delete({ where: { id: registration.id } });
                throw new Error('Verification code has expired');
            }

            if (validationNumber.number !== code) {
                throw new Error('Invalid verification code');
            }

            const updatedUser = await tx.user.update({
                where: { id: registration.id },
                data: { isVerified: true },
            });

            await tx.validationNumber.update({
                where: { userId: registration.id },
                data: { isVerified: true },
            });

            return updatedUser;
        });

        const tokens = await this.issueTokens(verifiedUser, sessionMeta);

        return {
            success: true,
            tokens,
            user: this.toAuthUser(verifiedUser),
        };
    }

    // ===== Login Flow =====
    async login(
        data: LoginInput,
        sessionMeta: SessionMeta
    ): Promise<{ success: boolean; tokens: AuthTokens; user: any }> {
        const { emailOrName, password } = data;

        const user = await this.findUserByIdentifier(emailOrName);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isValidPassword = await comparePasswords(password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }

        if (!user.isVerified) {
            throw new Error('Please verify your email before logging in');
        }

        await prisma.userSecurity.upsert({
            where: { userId: user.id },
            update: {
                lastLogin: new Date(),
                loginAttempts: 0,
            },
            create: {
                userId: user.id,
                lastLogin: new Date(),
                loginAttempts: 0,
            },
        });

        const tokens = await this.issueTokens(user, sessionMeta);

        return {
            success: true,
            tokens,
            user: this.toAuthUser(user),
        };
    }

    // ===== Logout Flow =====
    async logout(userId: string, refreshToken?: string): Promise<{ success: boolean; message: string }> {
        if (refreshToken) {
            await this.revokeSingleSession(refreshToken);
        } else {
            await revokeAllUserRefreshTokens(userId);
        }

        return {
            success: true,
            message: 'Logged out successfully',
        };
    }

    // ===== Refresh Token Flow =====
    async refresh(
        refreshToken: string,
        sessionMeta: SessionMeta
    ): Promise<{ success: boolean; tokens: AuthTokens }> {
        const tokens = await this.rotateSession(refreshToken, sessionMeta);

        return {
            success: true,
            tokens,
        };
    }

    // ===== Helper: Issue Token Pair =====
    private async issueTokens(user: User, sessionMeta: SessionMeta): Promise<AuthTokens> {
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user.id);
        const refreshTokenHash = await hashRefreshToken(refreshToken);

        await persistRefreshSession(user.id, refreshTokenHash, sessionMeta);

        return {
            accessToken,
            refreshToken,
        };
    }

    private toAuthUser(user: User): AuthUser {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
        };
    }

    private createVerificationArtifacts(): { code: string; expiration: bigint } {
        const code = crypto.randomInt(100000, 999999).toString();
        const expiration = BigInt(Date.now() + VERIFICATION_WINDOW_MS);
        return { code, expiration };
    }

    private async findUserByIdentifier(identifier: string): Promise<User | null> {
        return prisma.user.findFirst({
            where: {
                OR: [{ email: identifier }, { name: identifier }],
            },
        });
    }

    private async revokeSingleSession(refreshToken: string): Promise<void> {
        const result = await validateRefreshToken(refreshToken);
        if (result) {
            await revokeRefreshToken(result.session.id);
        }
    }

    private async rotateSession(
        refreshToken: string,
        sessionMeta: SessionMeta
    ): Promise<AuthTokens> {
        const result = await validateRefreshToken(refreshToken);
        if (!result) {
            throw new Error('Invalid or expired refresh token');
        }

        await revokeRefreshToken(result.session.id);

        return this.issueTokens(result.user, sessionMeta);
    }
}

export const authService = new AuthService();
