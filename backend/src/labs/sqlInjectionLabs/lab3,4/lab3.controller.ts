import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const findProduct = async (req: Request, res: Response) => {
    const category = "electronics";


const products: any = await prisma.$executeRawUnsafe(`
    SELECT * 
    FROM "lab3sql" 
    WHERE category = '${category}';
`);

    if (products === 0) {
        return res.status(404).send("No products found");
    }

    return res.status(200).json({
        msg: "products found",
        user: products
    });
}