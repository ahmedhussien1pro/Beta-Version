import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CSRFLab2 = async (req: Request, res: Response) => {
  try {
    const { username, enteredPass } = req.body;

    // Find user in the database
    const user = await prisma.cSRFLab2.findUnique({
      where: { authority: username },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // If user exists, return user details with entered password
    res.status(200).json({
      username: user.authority,
      validPass: user.password, // Actual password from DB
      enteredPass, // Password entered by the user
    });
  } catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.cSRFLab2.findMany({
      select: { authority: true, password: true },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
