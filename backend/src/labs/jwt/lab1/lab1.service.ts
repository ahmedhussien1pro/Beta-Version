import bcrypt from 'bcrypt'
import {lab1jwt} from "@prisma/client";
import jwt from 'jsonwebtoken'

export const hashPassword = async (password: string) => {
    return bcrypt.hash(password, 5);
}

export const comparePasswords = async (password: string, hash: string) => {
    return bcrypt.compare(password, hash)
}

export const createJWT = (user: lab1jwt) => {
    return  jwt.sign({username : user.username}, process.env.JWT_SECRET);
}