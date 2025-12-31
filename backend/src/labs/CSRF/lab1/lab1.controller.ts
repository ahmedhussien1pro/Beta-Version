import prisma from "../../../utilities/db";
import { Request, Response } from "express";

// Fetch the first account by ID
export async function getAccount(req: Request, res: Response) {
  try {
    const account = await prisma.bankAccount.findFirst({
      orderBy: { id: "asc" },
    });
    if (!account) return res.status(404).json({ message: "Account not found" });

    res.status(200).json({ account });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving account details." });
  }
}

// Update Account Password by ID and return updated account
export async function updatePassword(req: Request, res: Response) {
  const { id, newPass } = req.body;

  if (!id) return res.status(400).json({ message: "Account ID is required" });
  if (!newPass?.trim())
    return res.status(400).json({ message: "Password cannot be empty" });

  try {
    // Check if account exists
    const account = await prisma.bankAccount.findUnique({
      where: { id: Number(id) },
    });
    if (!account) return res.status(404).json({ message: "Account not found" });

    // Update password
    await prisma.bankAccount.update({
      where: { id: Number(id) },
      data: { accountPass: newPass },
    });

    // Fetch updated account details
    const updatedAccount = await prisma.bankAccount.findUnique({
      where: { id: Number(id) },
    });

    res.status(200).json({
      message: "Password Updating Successfully",
      account: updatedAccount, // Return updated user info
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating password." });
  }
}

// Create New Account
export async function createAccount(req: Request, res: Response) {
  const { accountNo, accountPass, accountBalance, accountName } = req.body;

  if (!accountNo || !accountPass || !accountName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newAccount = await prisma.bankAccount.create({
      data: {
        accountNo,
        accountPass,
        accountBalance: accountBalance || 0,
        accountName,
      },
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      account: newAccount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error creating account.",
      message: error.message || "An error occurred while creating the account.",
    });
  }
}
