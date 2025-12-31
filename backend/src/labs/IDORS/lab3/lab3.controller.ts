import e, { Response, Request } from "express";
import prisma from "../../../utilities/db";

export async function getAccounts(req: Request, res: Response) {
    try {
        const accounts = await prisma.lab3IDORS.findMany();

        return res.status(200).json({
            message: 'Accounts retrieved successfully',
            money: accounts,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error retrieving accounts.');
    }
}

export async function getAccount(req: Request, res: Response) {
    try {
        const account = await prisma.lab3IDORS.findUnique({
            where: {
                id: Number(req.params.id),
            }
        });

        if (!account) {
            return res.status(404).json({
                message: 'Account not found',
            });
        }

        return res.status(200).json({
            message: 'Account retrieved successfully',
            account: account,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error retrieving account.');
    }
}

export async function transfer(req: Request, res: Response) {
    try {
        const senderId = Number(req.body.userId);
        const receiverId = Number(req.body.recipientId);
        const transferAmount = Number(req.body.transferAmount);

        if (senderId === receiverId) {
            return res.status(400).json({
                message: 'Invalid operation',
            });
        }

    
        if (!transferAmount || isNaN(transferAmount) || transferAmount <= 0) {
            return res.status(400).json({
                message: 'Invalid transfer amount',
            });
        }

        const senderAccount = await prisma.lab3IDORS.findUnique({
            where: { id: senderId },
        });

        const receiverAccount = await prisma.lab3IDORS.findUnique({
            where: { id: receiverId },
        });

        if (!senderAccount || !receiverAccount) {
            return res.status(404).json({
                message: 'Account not found',
            });
        }

        if (senderAccount.balance < transferAmount) {
            return res.status(400).json({
                message: 'Insufficient balance',
            });
        }

        // Perform the transfer
        await prisma.$transaction([
            prisma.lab3IDORS.update({
                where: { id: senderId },
                data: { balance: senderAccount.balance - transferAmount }, // Deduct from sender
            }),
            prisma.lab3IDORS.update({
                where: { id: receiverId },
                data: { balance: receiverAccount.balance + transferAmount }, // Add to receiver
            }),
        ]);

        return res.status(200).json({
            message: 'Transfer successful',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error transferring funds.');
    }
}

export async function resetAccounts(req: Request, res: Response) {
    try {
        await prisma.lab3IDORS.updateMany({
            data: { balance: 1000 },
        });

        return res.status(200).json({
            message: 'Accounts reset successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error resetting accounts.');
    }
}