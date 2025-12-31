import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

// ===== Registration Schemas =====
export const RegisterSchema = z.object({
    email: z.string().email('Invalid email address'),
    name: z.string().min(3, 'Name must be at least 3 characters'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const VerifySchema = z.object({
    email: z.string().email('Invalid email address'),
    code: z.string().length(6, 'Verification code must be 6 digits'),
});

// ===== Login Schema =====
export const LoginSchema = z.object({
    emailOrName: z.string().min(1, 'Email or username is required'),
    password: z.string().min(1, 'Password is required'),
});

// ===== Refresh Schema =====
export const RefreshSchema = z.object({
    refreshToken: z.string().optional(), // Can come from cookie or body
});

// ===== Inferred Types =====
export type RegisterInput = z.infer<typeof RegisterSchema>;
export type VerifyInput = z.infer<typeof VerifySchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type RefreshInput = z.infer<typeof RefreshSchema>;

// ===== Validation Middleware Factory =====
export const validateRequest = (schema: z.ZodSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = await schema.parseAsync(req.body);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: 'Validation failed',
                    errors: error.issues.map(err => ({
                        field: err.path.join('.'),
                        message: err.message,
                    })),
                });
            }
            return res.status(400).json({ message: 'Invalid request data' });
        }
    };
};

// ===== Pre-configured Validators =====
export const validateRegister = validateRequest(RegisterSchema);
export const validateVerify = validateRequest(VerifySchema);
export const validateLogin = validateRequest(LoginSchema);
export const validateRefresh = validateRequest(RefreshSchema);
