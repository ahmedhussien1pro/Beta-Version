import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { authController } from './auth.controller';
import {
    validateRegister,
    validateVerify,
    validateLogin,
    validateRefresh,
} from './auth.validator';
import { requireAuth } from './middleware/require-auth';

const authRouter = Router();

const RATE_LIMIT_WINDOW_MINUTES = Number(process.env.AUTH_RATE_LIMIT_WINDOW_MINUTES ?? '15');
const RATE_LIMIT_WINDOW_MS = RATE_LIMIT_WINDOW_MINUTES * 60 * 1000;

const REGISTER_LIMIT_MAX = Number(process.env.AUTH_REGISTER_RATE_LIMIT_MAX ?? '5');
const VERIFY_LIMIT_MAX = Number(process.env.AUTH_VERIFY_RATE_LIMIT_MAX ?? '5');
const LOGIN_LIMIT_MAX = Number(process.env.AUTH_LOGIN_RATE_LIMIT_MAX ?? '5');
const REFRESH_LIMIT_MAX = Number(process.env.AUTH_REFRESH_RATE_LIMIT_MAX ?? '10');

// ===== Rate Limiters =====

// Registration rate limiter: 5 attempts per 15 minutes per IP
const registerLimiter = rateLimit({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: REGISTER_LIMIT_MAX,
    message: 'Too many registration attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

// Verification rate limiter: 5 attempts per 15 minutes per IP
const verifyLimiter = rateLimit({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: VERIFY_LIMIT_MAX,
    message: 'Too many verification attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

// Login rate limiter: 15 attempts per 15 minutes per IP
const loginLimiter = rateLimit({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: LOGIN_LIMIT_MAX,
    message: 'Too many login attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

// Refresh token rate limiter: 10 attempts per 15 minutes per IP
const refreshLimiter = rateLimit({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: REFRESH_LIMIT_MAX,
    message: 'Too many refresh attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
});

// ===== Routes =====

// POST /auth/register - Start registration (send verification code)
authRouter.post(
    '/register',
    registerLimiter,
    validateRegister,
    authController.register.bind(authController)
);

// POST /auth/verify - Complete registration (verify code)
authRouter.post(
    '/verify',
    verifyLimiter,
    validateVerify,
    authController.verify.bind(authController)
);

// POST /auth/login - Login with email/username and password
authRouter.post(
    '/login',
    loginLimiter,
    validateLogin,
    authController.login.bind(authController)
);

// POST /auth/logout - Logout (revoke refresh token)
authRouter.post(
    '/logout',
    requireAuth,
    authController.logout.bind(authController)
);

// POST /auth/refresh - Refresh access token
authRouter.post(
    '/refresh',
    refreshLimiter,
    validateRefresh,
    authController.refresh.bind(authController)
);

export default authRouter;
