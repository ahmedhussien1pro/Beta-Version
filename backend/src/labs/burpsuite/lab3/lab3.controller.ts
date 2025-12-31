import { Request, Response } from "express";
import prisma from "../../../utilities/db";

export const images = async (req: Request, res: Response) => {
  try {
    // Disable caching
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const images = await prisma.burPSuiteLab3.findMany({
      where: {
        id: { in: ["3", "6", "9"] },
      },
    });

    if (!images.length) {
      return res.status(404).send("No images found");
    }

    return res.status(200).json({
      message: "Images fetched successfully",
      data: images,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const image = async (req: Request, res: Response) => {
  try {
    // Disable caching
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    const { id } = req.params;

    // Return 404 immediately if ID is not in allowed list
    if (!["3", "6", "9"].includes(id)) {
      return res.status(404).send("No image found");
    }

    const image = await prisma.burPSuiteLab3.findUnique({
      where: { id },
    });

    if (!image) {
      return res.status(404).send("No image found");
    }

    return res.status(200).json({
      message: "Image fetched successfully",
      data: image,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};