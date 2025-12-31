import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../token.service';

// Extend Express Request type to include user
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: string;
                email: string;
                name: string;
            };
        }
    }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'No authorization token provided' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Invalid authorization format. Use: Bearer <token>' });
    }

    const token = parts[1];

    try {
        const decoded = verifyAccessToken(token);
        req.user = {
            id: decoded.sub,
            role: decoded.role,
            email: decoded.email,
            name: decoded.name,
        };
        next();
    } catch (error) {
        if (error instanceof Error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired' });
            }
            if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ message: 'Invalid token' });
            }
        }
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

// Optional: Role-based middleware
export const requireRole = (...allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }

        next();
    };
};
