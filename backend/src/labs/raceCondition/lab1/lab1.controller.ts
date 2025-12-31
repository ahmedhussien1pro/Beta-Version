import { Request, Response } from "express";
import prisma from "../../../utilities/db";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const register = async (req: Request, res: Response) => {
    try {
        const { email, name, surname, tel } = req.body;

        // Simulate a delay to increase the chance of a race condition
        await delay(1000); // 1 second delay

        console.log(`Checking if user with email ${email} exists...`);
        const user = await prisma.lab1RaceCondition.findFirst({
            where: { email }, // Use findFirst instead of findUnique
        });
        if (user) {
            console.log(`User with email ${email} already exists.`);
            return res.status(400).send("User already exists");
        }

        // Simulate another delay to increase the chance of a race condition
        await delay(1000); // 1 second delay

        console.log(`Creating user with email ${email}...`);
        const newUser = await prisma.lab1RaceCondition.create({
            data: { email, name, surname, tel },
        });

        console.log(`User created successfully: ${newUser.email}`);
        return res.status(201).json({ msg: "User created successfully" });
    } catch (e) {
        console.error("Error during registration:", e);
        return res.status(500).send("Internal Server Error");
    }
};

export const viewRegister = async (req: Request, res: Response) => {
    try {
        const users = await prisma.lab1RaceCondition.findMany();
        return res.status(200).json(users);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const deleteRegister = async (req: Request, res: Response) => {
    try {
        const user = await prisma.lab1RaceCondition.findUnique({
            where: {
                id: req.params.id
            },
        });
        if (!user) {
            return res.status(400).send("User not found");
        }
        await prisma.lab1RaceCondition.delete({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send("User deleted successfully");
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};