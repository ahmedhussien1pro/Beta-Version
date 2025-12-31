import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const shoppingCart = async (req: Request, res: Response) => {
    try {
        const products = [
            { name: "airphone", price: 150 },
            { name: "iphone", price: 1000 },
            { name: "powerbank", price: 200 }
        ];

        const payment = await prisma.lab2RaceConditionPayment.findFirst({
            orderBy: { createdAt: 'desc' }
        });

        if (!payment || payment.price === 0) {
            return res.status(404).json({ error: "can not apply coupon" });
        }
        const totalPrice = payment.priceAfterDiscount !== null ? payment.priceAfterDiscount : payment.price;

        return res.status(200).json({
            products,
            totalPrice
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }
};

export const setPrice = async (req: Request, res: Response) => {
    try {
        console.log(req.body);

        const price = req.body.totalPrice;

        // Insert new payment
        await prisma.lab2RaceConditionPayment.create({
            data: {
                price,
            }
        });

        return res.status(201).json({
            totalPrice: price,
            message: "Price set successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const isValidCoupon = async (req: Request, res: Response) => {
    try {
        const coupon = req.body.couponCode;

        if (!coupon) {
            return res.status(400).json({ error: "Coupon is required" });
        }

        // Find the lab entry by coupon
        const couponInDB = await prisma.lab2RaceConditionCoupon.findUnique({
            where: { coupon }
        });

        if (!couponInDB) {
            return res.status(404).json({ error: "Invalid coupon" });
        }

        if (!couponInDB.isValid) {
            return res.status(400).json({ error: "Coupon is no longer valid" });
        }

        // Disable the coupon after 500ms
        setTimeout(async () => {
            await prisma.lab2RaceConditionCoupon.update({
                where: { id: couponInDB.id },
                data: { isValid: false }
            });
        }, 500);

        // Get the last payment used for the coupon in descending order
        const payment = await prisma.lab2RaceConditionPayment.findFirst({
            orderBy: { createdAt: 'desc' }
        });

        if (!payment || payment.price === 0) {
            return res.status(404).json({ error: " There is no payment cannot apply coupon" });
        }
        
        // Calculate the payment after discount
        let paymentAfterDiscount;
        if (payment.priceAfterDiscount !== null) {
            paymentAfterDiscount = payment.priceAfterDiscount - (couponInDB.discount || 50);
        } else {
            paymentAfterDiscount = payment.price - (couponInDB.discount || 50);
        }

        // Update the payment with the discount
        const updatedPayment = await prisma.lab2RaceConditionPayment.update({
            where: { id: payment.id },
            data: {
                priceAfterDiscount: paymentAfterDiscount,
                couponId: couponInDB.id
            }
        });

        const totalPrice = updatedPayment.priceAfterDiscount !== null ? updatedPayment.priceAfterDiscount : updatedPayment.price;
        console.log(totalPrice);

        return res.status(200).json({
            message: "Coupon applied successfully",
            totalPrice
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const clearDiscount = async (req: Request, res: Response) => {
    try {
        const { coupon } = req.body;
        if (!coupon) {
            return res.status(400).json({ error: "Coupon is required" });
        }

        // Find the lab entry by coupon
        const couponInDB = await prisma.lab2RaceConditionCoupon.findUnique({
            where: { coupon },
        });

        if (!couponInDB) {
            console.log("here");
            return res.status(404).json({ error: "Invalid coupon" });
        }

        console.log(couponInDB);

        await prisma.lab2RaceConditionCoupon.update({
            where: { id: couponInDB.id },
            data: { isValid: true }
        });

        // Get the payment used for the coupon
        const payment = await prisma.lab2RaceConditionPayment.findFirst({
            where: { couponId: couponInDB.id },
        });

        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }

        // Clear the discount
        await prisma.lab2RaceConditionPayment.update({
            where: { id: payment.id },
            data: { priceAfterDiscount: null }
        });

        return res.status(200).json({
            price: payment.price,
            message: "Discount cleared successfully"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const resetLab = async (req: Request, res: Response) => {
    try {
        await prisma.$transaction(async (tx) => {
            // Update all coupons to be valid
            await tx.lab2RaceConditionCoupon.updateMany({
                where: { isValid: false },
                data: { isValid: true, }
            });

            // Delete all payments
            await tx.lab2RaceConditionPayment.deleteMany();
        });

        return res.status(200).json({ message: "Lab reset successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
