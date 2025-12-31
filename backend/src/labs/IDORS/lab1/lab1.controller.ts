import prisma from "../../../utilities/db";
import { Request, Response } from "express";

export async function getPdfs(req: Request, res: Response) {
    try {
        const pdfs = await prisma.lab1IDORS.findMany({
            select: {
                id: true,
                path: true,}
            })
        res.status(200).json({
            message: 'Pdfs retrieved successfully',
            pdfs: pdfs,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error retrieving pdfs.');
    }
}

export async function getPdf(req: Request, res: Response) {
    try {
        const pdf = await prisma.lab1IDORS.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            select: {
                id: true,
                path: true,}
            })
        res.status(200).json({
            message: 'Pdf retrieved successfully',
            pdf: pdf,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error retrieving pdf.');
    }
}
