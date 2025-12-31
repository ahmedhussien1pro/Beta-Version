import { Request, Response } from 'express';
import path from 'path';
import fs, { cpSync } from "fs";

export async function carPage(req: Request, res: Response) {
    try {
        let car = req.query.car as string;
        if (!car) {
            return res.status(400).send("Car parameter is required.");
        }
        
        // Sanitize the input by removing any unwanted characters
        car = car.replace(/[^a-zA-Z0-9_-]/g, "");
        
        // Construct the file path relative to the `views` directory
        const filePath = path.join(__dirname, "../../../../views/lab3", `${car}.ejs`);
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            return res.status(400).send("ERROR: File not found!");
        }
        res.render(`lab3/${car}`, { car }); // Dynamically load car file
    } catch (error) {
        res.status(500).send(error.message || "Error rendering page.");
    }
}