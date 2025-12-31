import { Response, Request } from "express";
import prisma from "../../../utilities/db";


export async function getBalance(req: Request, res: Response) {
    try {
        const balance = await prisma.lab2IDORS.upsert({
            where: { id: 1 },
            update: { balance: 1000 }, // Update the balance to 1000 if it exists
            create: {
                id: 1,
                balance: 1000, // Create the balance with 1000 if it does not exist
            },
        });

        return res.status(200).json({
            message: 'Balance initialized and retrieved successfully',
            balance: balance.balance,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error retrieving balance.');
    }
}

export async function bookingTickets(req: Request, res: Response) {
    try {
        // Fetch the balance
        const balanceDB = await prisma.lab2IDORS.findUnique({
            where: {
                id: 1,
            }
        });

        if (!balanceDB) {
            return res.status(404).json({
                message: 'balance not found',
            });
        }

        let balance = balanceDB.balance;
        const ticketPrice = req.body.ticketPrice;
        const numOfTickets = req.body.numOfTickets;
        const ticketsPrice = ticketPrice * numOfTickets;

        if (balance < ticketsPrice) {
            return res.status(400).json({
                message: 'Insufficient balance',
            });
        } else {
            balance -= ticketsPrice;
            await prisma.lab2IDORS.update({
                where: {
                    id: 1, 
                },
                data: {
                    balance: balance,
                }
            });
            return res.status(200).json({
                message: 'Tickets booked successfully',
                balance: balance,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message || 'Error booking ticket.');
    }
}

