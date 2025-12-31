// controller.ts

import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateFavorite = async (req: Request, res: Response) => {
  const { courseId, favorite } = req.body;

  if (typeof courseId !== "number" || typeof favorite !== "boolean") {
    return res.status(400).json({ message: "Invalid data provided" });
  }

  try {
    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: { favorite },
    });
    return res.json({ success: true, course: updatedCourse });
  } catch (error) {
    console.error("Error updating favorite:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

/**
 * Register a user for a course.
 * Expects: { courseId: number } in req.body.
 */
export const registerCourse = async (req: Request, res: Response) => {
  const { courseId } = req.body;

  if (typeof courseId !== "number") {
    return res.status(400).json({ message: "Invalid course ID provided" });
  }

  try {
    // Optionally, verify that the course exists.
    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Create a new registration record.
    const registration = await prisma.courseRegistration.create({
      data: {
        course: {
          connect: { id: courseId },
        },
      },
    });
    return res.json({ success: true, registration });
  } catch (error) {
    console.error("Error registering course:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
