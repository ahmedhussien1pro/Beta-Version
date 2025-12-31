import { Request, Response } from "express";
import prisma from "../../../utilities/db";
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.aCUser.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.aCUser.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
