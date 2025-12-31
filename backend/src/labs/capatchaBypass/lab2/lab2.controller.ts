import { Request, Response } from "express";
import prisma from "../../../utilities/db";


async function generateNewCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const sum = num1 + num2;

    await prisma.lab2captcha.deleteMany(); // Clear previous captcha

    return prisma.lab2captcha.create({
        data: { captcha: sum.toString() },
    }).then(() => ({ num1, num2, sum }));
}

// Generate numbers and store sum in DB
export const lab2controller = async (req: Request, res: Response) => {
    try {
        const { num1, num2, sum } = await generateNewCaptcha();

        res.json({ num1, num2 });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

// Verify user input against stored sum
export const verifySum = async (req: Request, res: Response) => {
    try {
        const { result } = req.body;
        const commment  = req.body.comment;

        // Retrieve the stored sum from the database
        const captchaRecord = await prisma.lab2captcha.findFirst();
        const storedSum = captchaRecord ? parseInt(captchaRecord.captcha || "0") : null;

        console.log("Stored sum:", storedSum);
        console.log("Received result:", result);

        // If no captcha exists in DB, return error
        if (storedSum === null) {
            return res.status(400).json({ message: "Captcha not found. Please retry." });
        }

        // Check if the result matches the stored sum
        if (result == storedSum) {
            await generateNewCaptcha(); // Generate new captcha on success
            await prisma.lab2captchaComment.create({
                data: { comment: commment },
            });
            return res.status(200).json({ message: "Correct result" });
        } else {
            return res.status(400).json({ message: "Incorrect result" });
        }
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const getComments = async (req: Request, res: Response) => {
    try {
        const comments = await prisma.lab2captchaComment.findMany({
            select: {
                comment: true,
            },
        });

        return res.status(200).json(comments);
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
}

export const deleteComments = async (req: Request, res: Response) => {
    try {
        await prisma.lab2captchaComment.deleteMany();
        return res.status(200).json({ message: "Comments deleted" });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
}