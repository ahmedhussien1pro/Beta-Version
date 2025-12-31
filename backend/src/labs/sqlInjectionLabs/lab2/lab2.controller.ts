import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const findReleasedProduct = async (req: Request, res: Response) => {
    const category = "electronics";


const products: any = await prisma.$executeRawUnsafe(`
    SELECT * 
    FROM "lab2sql" 
    WHERE category = '${category}' AND released = '1';
`);

    if (products === 0) {
        return res.status(404).send("No products found");
    }

    return res.status(200).json({
        msg: "products found",
        user: products
    });
}