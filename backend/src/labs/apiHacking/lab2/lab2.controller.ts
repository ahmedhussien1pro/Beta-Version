import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const loginController = async (req: Request, res: Response) => {
  const user = await prisma.apiHackingLab.findUnique({
    where: {
      username: req.body.username,
    },
  });
  if (!user) {
    return res.status(404).send("Not a user");
  }
  const isValid: boolean = req.body.password === user.password;

  if (!isValid) {
    return res.status(401).send("Invalid name or password");
  }

  return res.status(200).json({
    message: "success",
    data: {
      id: user.id,
    },
  });
};

export const userImageById = async (req: Request, res: Response) => {
  const userImage = await prisma.imageForApiHacking.findMany({
    where: {
      userId: Number(req.params.userId),
    },
  });
  if (!userImage) {
    return res.status(404).send("No image found");
  }
  return res.status(200).json({
    message: "success",
    data: userImage,
  });
};

export const deleteUserImage = async (req: Request, res: Response) => {
  const userImage = await prisma.imageForApiHacking.findUnique({
    where: {
      userId: Number(req.params.userId),
      id: Number(req.params.id), // id of the image
    },
  });
  if (!userImage) {
    return res.status(404).send("No image found");
  }
  await prisma.imageForApiHacking.delete({
    where: {
      id: Number(req.params.id),
    },
  });

  return res.status(200).json({
    message: "image deleted successfully",
    data: userImage,
  });
};
