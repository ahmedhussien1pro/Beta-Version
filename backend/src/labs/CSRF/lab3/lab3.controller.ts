import { Response, Request } from "express";
import prisma from "../../../utilities/db";

export async function getAccounts(req: Request, res: Response) {
  try {
    const accounts = await prisma.cSRFLab3.findMany({
      orderBy: {
        id: "asc",
      },
      take: 2,
    });

    return res.status(200).json({
      message: "Accounts retrieved successfully",
      money: accounts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error retrieving accounts.");
  }
}

export async function getAccount(req: Request, res: Response) {
  try {
    const account = await prisma.cSRFLab3.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!account) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    return res.status(200).json({
      message: "Account retrieved successfully",
      account: account,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error retrieving account.");
  }
}

export async function transfer(req: Request, res: Response) {
  try {
    const senderId = Number(req.body.userId);
    const recipientId = Number(req.body.recipientId); // Add recipientId to the request body
    const transferAmount = Number(req.body.transferAmount);

    // Validate transfer amount
    if (transferAmount <= 0) {
      return res.status(400).json({
        message: "Transfer amount must be greater than 0.",
      });
    }

    // Fetch sender and recipient accounts
    const senderAccount = await prisma.cSRFLab3.findUnique({
      where: { id: senderId },
    });

    const recipientAccount = await prisma.cSRFLab3.findUnique({
      where: { id: recipientId },
    });

    // Validate sender and recipient accounts
    if (!senderAccount || !recipientAccount) {
      return res.status(404).json({
        message: "Sender or recipient account not found.",
      });
    }

    // Ensure sender and recipient are not the same
    if (senderAccount.id === recipientAccount.id) {
      return res.status(400).json({
        message: "Invalid operation: Cannot transfer to self.",
      });
    }

    // Check sender's balance
    if (senderAccount.balance < transferAmount) {
      return res.status(400).json({
        message: "Insufficient balance.",
      });
    }

    // Perform the transfer using a transaction
    await prisma.$transaction([
      prisma.cSRFLab3.update({
        where: { id: senderAccount.id },
        data: { balance: senderAccount.balance - transferAmount },
      }),
      prisma.cSRFLab3.update({
        where: { id: recipientAccount.id },
        data: { balance: recipientAccount.balance + transferAmount },
      }),
    ]);

    return res.status(200).json({
      message: "Transfer successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || "Error transferring funds.");
  }
}
