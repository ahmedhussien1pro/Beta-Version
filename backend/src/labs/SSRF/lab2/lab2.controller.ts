import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const checkStock = (): string => {
    return Math.random() > 0.5 ? "In Stock" : "Out of Stock";
};
export const products = (req: Request, res: Response) => {
  res.json({ message: checkStock() });
};
export const deleteUser = async (req: Request, res: Response) => {
    const username = req.body.username;
    if (!username) {
        return res.status(400).json({ error: "userId is required" });
    }

    const user = await prisma.lab1SSRF.findUnique({
        where: { username }
    });

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    await prisma.lab1SSRF.delete({
        where: { username }
    });

    return res.status(200).json({ message: "User deleted successfully" });
}

export const resetLab1 = async (req: Request, res: Response) => {
    try {
        await prisma.lab1SSRF.deleteMany();
        const user = await prisma.lab1SSRF.create(
            {
                data: {
                    username: "moamen",
                }
            }
        )
        res.status(200).json({
            message: "Lab 1 reset successfully!",
            username: user.username
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
