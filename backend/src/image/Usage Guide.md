# 📦 Image Upload Middleware — Usage Guide

This document explains how to use the unified image upload middleware that handles:

- Multer (memory storage)
- Cloudinary upload
- Prisma `Image` record update

---

## ✅ Usage in a Route

Import the middleware:

```ts
import {
  upload,
  imageUploadMiddleware,
} from '../middleware/imageUpload.middleware';
```

Use it inside any route:

```ts
router.post(
  '/upload-image',
  upload.single('image'),
  imageUploadMiddleware,
  async (req, res) => {
    res.json({
      message: 'Image uploaded successfully',
      data: req.imageData,
    });
  }
);
```

---

## ✅ What the Middleware Adds to `req`

After processing the upload:

```ts
req.imageData = {
  url: string, // Cloudinary final URL
  publicId: string, // Cloudinary public id
  record: Image, // Prisma database record
};
```

You can use this object to update user profiles or return the uploaded image details.

---

## ✅ Error Handling

If anything fails (missing file, Cloudinary error, Prisma write error), a unified error response is returned:

```json
{
  "message": "Image upload failed",
  "error": {}
}
```
