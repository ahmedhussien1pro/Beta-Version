import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import multer from "multer";
import fs from "fs";
import path from "path";
import prisma from "../utilities/db";
import { hashPassword, comparePasswords } from "../utilities/auth";


export async function getAllUsers(req: Request, res: Response): Promise<Response> {
    const writers = await prisma.user.findMany({
        where: { role: 'writer' },
    });
    return res.status(200).json({
        data: writers
    });
}

export async function getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: { email: true, name: true, role: true, id: true },

        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            msg: "User found",
            data: { email: user.email, name: user.name, role: user.role }
        });

    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function createNewUser(req: Request, res: Response): Promise<Response> {
    const { email, name, role } = req.body;
    const hashedPassword = await hashPassword(req.body.password);
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role,
                isVerified: true,
            }
        });
        return res.status(201).json({
            msg: "User created successfully",
            data: user
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { email, name, role } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await prisma.user.update({
            where: { id },
            data: {
                email,
                name,
                role,
            },
        });

        const updatedUser = await prisma.user.findUnique({
            where: { id },
            select: { email: true, name: true, role: true, id: true },
        });


        return res.status(200).json({
            msg: "User updated successfully",
            data: updatedUser
        });


    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        await prisma.validationNumber.deleteMany({
            where: { userId: id },
        });

        await prisma.user.delete({
            where: { id },
        });
        return res.status(200).json({
            message: "User deleted successfully",
            data: null
        });

    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function getUserByToken(req: Request, res: Response): Promise<Response> {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Authorization token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
        const userId = decoded.id;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isVerified: true,
                createdAt: true,
                updatedAt: true,
                birthday: true,
                phoneNum: true,
                address: true,
                image: true
            },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            msg: "User found",
            data: user
        });

    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

export async function addPersonalInfo(req: Request, res: Response): Promise<Response> {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Authorization token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: string };
        const userId = decoded.id;

        // Check if the name already exists
        const existName = await prisma.user.findUnique({
            where: { name: req.body.name },
        });


        // Build the update data dynamically
        const updateData: any = {
            name: req.body.name,
            birthday: req.body.birthday,
            phoneNum: req.body.phoneNum,
            address: req.body.address,
        };

        if (req.body.imageId) {
            updateData.image = {
                connect: { id: req.body.imageId },
            };
        }

        // Update the user
        const user = await prisma.user.update({
            where: { id: userId },
            include: { image: true },
            data: updateData,
        });

        return res.status(200).json({
            msg: "User updated successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Server error" });
    }
}


export async function resetPassword(req: Request, res: Response): Promise<Response> {
    const userId = req.params.id;
    try {

        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!await comparePasswords(req.body.oldPassword, user.password)) {
            return res.status(400).json({ error: "Old password is incorrect" });
        }

        const hashedPassword = await hashPassword(req.body.newPassword);

        const newPassword = await prisma.user.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
            },
        });
        return res.status(200).json({
            msg: "Password updated successfully",
            data: user
        });

    } catch
    (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}

export async function personalInfo(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: { email: true, name: true, role: true, birthday: true, phoneNum: true, address: true },

        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            msg: "User found",
            data: {
                email: user.email,
                name: user.name,
                role: user.role,
                birthday: user.birthday,
                phoneNum: user.phoneNum,
                address: user.address
            }
        });

    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ error: " server error" });
    }
}


// for user photo
export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = path.join(__dirname, "..", "uploads");
      try {
        fs.mkdirSync(uploadDir, { recursive: true });
      } catch (err) {
        console.error("Failed to create uploads dir:", err);
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/jpg'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
});

// Save the file details to the database
const fsPromises = require("fs").promises;
export async function saveImage(req, res, next) {
  try {
    const file = req.file;

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token is required" });
    }

    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    } catch (err) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    const userId = decoded?.id;
    if (!userId) {
      return res.status(400).json({ error: "User ID is missing from token" });
    }

    if (!file) {
      return next();
    }

    const existingImage = await prisma.image.findFirst({ where: { userId } });
    if (existingImage) {
      try {
        await fsPromises.unlink(existingImage.path);
        console.log(`Old image deleted: ${existingImage.path}`);
      } catch (err) {
        console.warn(`Failed to delete old image: ${existingImage.path}. Error: ${err.message}`);
      }
      await prisma.image.delete({ where: { id: existingImage.id } });
    }

    const savedFile = await prisma.image.create({
      data: {
        name: file.originalname,
        mimetype: file.mimetype,
        path: file.path,
        user: { connect: { id: userId } },
      },
    });

    req.body.imageId = savedFile.id;
    next();
  } catch (error) {
    console.error("Error handling image upload:", error);
    return res.status(500).json({ error: error.message || "Error uploading file." });
  }
}

export async function contactUs(req: Request, res: Response): Promise<Response> {
    const { fname, lname, phone, email, message } = req.body;
    try {
        const contact = await prisma.contactUs.create({
            data: {
                fname,
                lname,
                phone,
                email,
                message
            }
        });
        return res.status(201).json({
            msg: "Message sent successfully. We will contact you soon.",
            data: contact
        });
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).json({ error: " server error" });
    }
}
