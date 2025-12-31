import {Request, Response} from 'express';
import {authService} from './auth.service';
import type {LoginInput, RegisterInput, VerifyInput} from './auth.validator';

export class AuthController {
    // ===== POST /auth/register =====
    async register(req: Request, res: Response) {
        try {
            const data: RegisterInput = req.body;
            const result = await authService.startRegistration(data);

            return res.status(201).json({
                success: true,
                message: result.message,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Registration failed',
            });
        }
    }

    // ===== POST /auth/verify =====
    async verify(req: Request, res: Response): Promise<Response> {
        try {
            const data: VerifyInput = req.body;
            const sessionMeta = {
                userAgent: req.headers['user-agent'],
                ip: req.ip || req.socket.remoteAddress,
            };

            const result = await authService.verifyRegistration(data, sessionMeta);

            // Set refresh token as httpOnly cookie
            res.cookie('refreshToken', result.tokens.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            return res.status(200).json({
                success: true,
                message: 'Email verified successfully',
                accessToken: result.tokens.accessToken,
                refreshToken: result.tokens.refreshToken,
                user: result.user,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Verification failed',
            });
        }
    }

    // ===== POST /auth/login =====
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const data: LoginInput = req.body;
            const sessionMeta = {
                userAgent: req.headers['user-agent'],
                ip: req.ip || req.socket.remoteAddress,
            };

            const result = await authService.login(data, sessionMeta);

            // Set refresh token as httpOnly cookie
            res.cookie('refreshToken', result.tokens.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            return res.status(200).json({
                success: true,
                message: 'Login successful',
                accessToken: result.tokens.accessToken,
                refreshToken: result.tokens.refreshToken,
                user: result.user,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Login failed',
            });
        }
    }

    // ===== POST /auth/logout =====
    async logout(req: Request, res: Response): Promise<Response> {
        try {
            const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
            const userId = req.user?.id;

            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: 'User not authenticated',
                });
            }

            await authService.logout(userId, refreshToken);

            // Clear refresh token cookie
            res.clearCookie('refreshToken');

            return res.status(200).json({
                success: true,
                message: 'Logged out successfully',
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Logout failed',
            });
        }
    }

    // ===== POST /auth/refresh =====
    async refresh(req: Request, res: Response): Promise<Response> {
        try {
            const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

            if (!refreshToken) {
                return res.status(401).json({
                    success: false,
                    message: 'No refresh token provided',
                });
            }

            const sessionMeta = {
                userAgent: req.headers['user-agent'],
                ip: req.ip || req.socket.remoteAddress,
            };

            const result = await authService.refresh(refreshToken, sessionMeta);

            // Set new refresh token as httpOnly cookie
            res.cookie('refreshToken', result.tokens.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            return res.status(200).json({
                success: true,
                message: 'Token refreshed successfully',
                accessToken: result.tokens.accessToken,
                refreshToken: result.tokens.refreshToken,
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(401).json({
                    success: false,
                    message: error.message,
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Token refresh failed',
            });
        }
    }
}

export const authController = new AuthController();
