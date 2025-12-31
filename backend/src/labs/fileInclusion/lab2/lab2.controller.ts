import { Request, Response } from 'express';

export async function fruitPage(req: Request, res: Response) {
    try {
        let fruit = req.query.fruit as string;
        if (!fruit) {
            return res.status(400).send("Fruit parameter is required.");
        }

        // Prevent Remote File Inclusion (RFI)
        fruit = fruit.replace(/https?:\/\//g, "");

        // Prevent Directory Traversal Attacks (LFI)
        fruit = fruit.replace(/\.\.\//g, "");
        res.render(`lab2/${fruit}`, { fruit }); // Dynamically load fruit file
    } catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}