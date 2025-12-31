import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import prisma from '../utilities/db';

// ===== Password Utilities =====
export const hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
};

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash);
};

// ===== Access Token (15 minutes) =====
export const generateAccessToken = (user: User): string => {
    return jwt.sign(
        {
            sub: user.id,
            role: user.role,
            email: user.email,
            name: user.name
        },
        process.env.JWT_SECRET!,
        { expiresIn: '15m' }
    );
};

export const verifyAccessToken = (token: string): { sub: string; role: string; email: string; name: string } => {
    return jwt.verify(token, process.env.JWT_SECRET!) as { sub: string; role: string; email: string; name: string };
};

// ===== Refresh Token (7 days) =====
export const generateRefreshToken = (userId: string): string => {
    return jwt.sign(
        { sub: userId, type: 'refresh' },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: '7d' }
    );
};

export const verifyRefreshToken = (token: string): { sub: string; type: string } => {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as { sub: string; type: string };
};

// ===== Refresh Token Hashing =====
export const hashRefreshToken = async (token: string): Promise<string> => {
    return bcrypt.hash(token, 10);
};

export const compareRefreshToken = async (token: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(token, hash);
};

// ===== Session Management =====
interface RefreshSessionMeta {
    userAgent?: string;
    ip?: string;
}

export const persistRefreshSession = async (
    userId: string,
    tokenHash: string,
    meta: RefreshSessionMeta
) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    return prisma.refreshToken.create({
        data: {
            userId,
            tokenHash,
            expiresAt,
            userAgent: meta.userAgent,
            ip: meta.ip,
        },
    });
};

export const validateRefreshToken = async (token: string) => {
    try {
        const decoded = verifyRefreshToken(token);

        // Find all active sessions for this user
        const sessions = await prisma.refreshToken.findMany({
            where: {
                userId: decoded.sub,
                revokedAt: null,
                expiresAt: { gt: new Date() },
            },
            include: { user: true },
        });

        // Compare token hash with stored hashes
        for (const session of sessions) {
            const isValid = await compareRefreshToken(token, session.tokenHash);
            if (isValid) {
                return { session, user: session.user };
            }
        }

        return null;
    } catch (error) {
        return null;
    }
};

export const revokeRefreshToken = async (sessionId: string) => {
    return prisma.refreshToken.update({
        where: { id: sessionId },
        data: { revokedAt: new Date() },
    });
};

export const revokeAllUserRefreshTokens = async (userId: string) => {
    return prisma.refreshToken.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: new Date() },
    });
};
