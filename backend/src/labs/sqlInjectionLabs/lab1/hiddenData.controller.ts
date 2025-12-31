import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const findOrCreateUser = async (req: Request, res: Response) => {
  console.log("Executing findOrCreateUser...");
  const username = "CyberLabs";
  const password = "123";

  try {
    const user = await prisma.$queryRawUnsafe<
      { username: string; password: string }[]
    >(`SELECT * FROM "userForSQLInjection" WHERE username = $1`, username);

    if (user && user.length === 0) {
      console.log("User not found. Adding to DB...");
      await prisma.$executeRawUnsafe(
        `INSERT INTO "userForSQLInjection" (username, password) VALUES ($1, $2)`,
        username,
        password
      );
      return res.status(201).json({ msg: "User CyberLabs created" });
    }

    console.log("User already exists");
    return res.status(200).json({ msg: "User exists", user: user[0] });
  } catch (error) {
    console.error("Error executing function:", error);
    return res.status(500).send("Internal Server Error");
  }
};

export const findUser = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user: any = await prisma.$queryRawUnsafe(
      `SELECT * FROM "userForSQLInjection" WHERE username = $1 AND password = $2`,
      username,
      password
    );

    if (!user || user.length === 0) {
      return res.status(404).send("Not a user");
    }

    return res.status(200).json({
      msg: "User found",
      user: user[0],
    });
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).send("Internal Server Error");
  }
};
