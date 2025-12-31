import { Request, Response } from 'express';

export async function cityPage(req: Request, res: Response) {
    try {
        let city = req.query.city as string;

        res.render(`lab1/${city}`, { city }); // Dynamically load city file
    } catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}