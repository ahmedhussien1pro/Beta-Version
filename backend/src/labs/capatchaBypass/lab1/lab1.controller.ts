import { Request, Response } from "express";
import prisma from "../../../utilities/db";
import { createCanvas } from "canvas";
import { randomBytes } from "crypto";

export const generateCaptcha = () => {
    const width = 200, height = 50;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#F5F5F5"; // Light background
    ctx.fillRect(0, 0, width, height);

    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let captchaText = "";

    for (let i = 0; i < 6; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        captchaText += char;
        ctx.fillStyle = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`;
        ctx.font = "30px Arial";
        ctx.fillText(char, 30 * i + 10, 35);
    }

    return { text: captchaText, image: canvas.toDataURL() };
};

export const lab1controller = async (req: Request, res: Response) => {
    try {
        const captcha = generateCaptcha();

        await prisma.lab1captcha.create({
            data: {
                captcha: captcha.text,
            },
        });

        res.json({ image: captcha.image });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const verifyCaptcha = async (req: Request, res: Response) => {
    try {
        const { captcha, comment } = req.body; // Corrected destructuring

        const captchaDB = await prisma.lab1captcha.findUnique({
            where: { captcha },
        });

        if (!captchaDB) {
            return res.status(400).json({ error: "Invalid captcha" });
        }

        await prisma.lab1captcha.create({
            data: {
                captcha: randomBytes(16).toString("hex"),
                comment,
            },
        });

        return res.status(200).json({ message: "Captcha verified successfully" });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const getComments = async (req: Request, res: Response) => {
    try {
        const comments = await prisma.lab1captcha.findMany({
            where: { comment: { not: null } }, // Only fetch rows with comments
            select: { comment: true },
        });

        return res.status(200).json({ comments });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const deleteComments = async (req: Request, res: Response) => {
    try {
        await prisma.lab1captcha.deleteMany({
            where: { comment: { not: null } }, // Delete all rows with comments
        });

        return res.status(200).json({ message: "All captchas and comments deleted successfully" });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};
