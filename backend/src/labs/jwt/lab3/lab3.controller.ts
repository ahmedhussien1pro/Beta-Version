import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { comparePasswords, createJWT } from './lab3.service';
import prisma from '../../../utilities/db';

export const loginController = async (req: Request, res: Response) => {
    const user = await prisma.lab3jwt.findUnique({
        where: {
            username: req.body.username,
        },
    });
    if (!user) {
        return res.status(404).send('Not a user');
    }

    const isValid: boolean = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
        return res.status(401).send('Invalid name or password');
    }

    const token: string = createJWT(user);

    await prisma.lab3jwt.update({
        where: { id: user.id },
        data: { token: token },
    });

    console.log('User logged in successfully:' + token);
    return res.status(200).json({
        message: 'User logged in successfully',
        data: {
            token: token,
            username: user.username,
            email: user.email,
        },
    });
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    const [, token] = bearer.split(' ');
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Decode the token without verification, allowing "none" algorithm
        const user = jwt.decode(token) as JwtPayload;
        if (!user || !user.username) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        
        req.params.id = user.id;
        console.log(user.username);
        if (user.username === 'admin') {
            next();
        } else {
            return res.status(401).json({ message: 'Not authorized, not an admin' });
        }
    } catch (e) {
        console.error(e);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const user = await prisma.lab3jwt.findUnique({
        where: {
            username: req.body.username,
        },
    });
    if (!user) {
        return res.status(404).send('Not a user');
    }
    await prisma.lab3jwt.delete({
        where: {
            username: req.body.username,
        },
    });
    return res.status(200).send('User deleted successfully');
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const existingUser = await prisma.lab3jwt.findUnique({
            where: { username },
        });

        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        const newUser = await prisma.lab3jwt.create({
            data: { username, password },
        });

        return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
