import { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import prisma from '../utilities/db';
import { v2 as cloudinary } from 'cloudinary';
import { Image } from '@prisma/client';

// ======================================================
// TypeScript Augmentation — Add req.file & req.imageData
// ======================================================
declare module 'express-serve-static-core' {
  interface Request {
    file?: multer.File;
    user?: { id: string };
    imageData?: {
      url: string;
      publicId: string;
      record: Image;
    };
  }
}

// -------------------------------
// Cloudinary Config
// -------------------------------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// -------------------------------
// Multer Config (Memory Storage)
// -------------------------------
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// -------------------------------
// Upload Logic Middleware
// -------------------------------
export const imageUploadMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const file = req.file;

    // -------------------------------------
    // Upload stream to Cloudinary
    // -------------------------------------
    const uploaded: any = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'Profile_images',
          resource_type: 'image',
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      stream.end(file.buffer);
    });

    const cloudUrl = uploaded.secure_url;
    const cloudPublicId = uploaded.public_id;

    // -------------------------------------
    // Save or update Image record
    // -------------------------------------
    const imageRecord = await prisma.image.upsert({
      where: { userId: req.user!.id },
      update: {
        name: file.originalname,
        mimeType: file.mimetype,
        url: cloudUrl,
        alt: req.body.alt || null,
      },
      create: {
        name: file.originalname,
        mimeType: file.mimetype,
        url: cloudUrl,
        alt: req.body.alt || null,
        userId: req.user!.id,
      },
    });

    // -------------------------------------
    // Add the data back to the request
    // -------------------------------------
    req.imageData = {
      url: cloudUrl,
      publicId: cloudPublicId,
      record: imageRecord,
    };

    next();
  } catch (err) {
    console.error('Image Upload Error:', err);
    return res.status(500).json({
      message: 'Image upload failed',
      error: err,
    });
  }
};
