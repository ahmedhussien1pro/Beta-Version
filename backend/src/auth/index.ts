// Export main router
export { default as authRouter } from './auth.router';

// Export controllers
export { authController, AuthController } from './auth.controller';

// Export services
export { authService, AuthService } from './auth.service';
export * from './token.service';
export { mailerClient } from './mailer.client';

// Export validators
export * from './auth.validator';

// Export middleware
export { requireAuth, requireRole } from './middleware/require-auth';
