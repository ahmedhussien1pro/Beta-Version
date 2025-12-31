import multer from 'multer';
import prisma from "../../../utilities/db";
import path from 'path';

export const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/'); // Directory where files will be stored
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
        },
    }),
    fileFilter: (req, file, cb) => {
        // Get the file extension
        const ext = path.extname(file.originalname).toLowerCase();

        // Block only PHP-related extensions
        const blockedExtensions = ['.php'];

        // Check if the file extension is blocked
        if (blockedExtensions.includes(ext)) {
            return cb(new Error(`Files with extension ${ext} are not allowed`), false);
        }

        // Allow all other files
        cb(null, true);
    },
    // Optional: Limit file size
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB file size limit
    }
});

export async function saveFile(req, res) {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        // Save file details to the database
        const savedFile = await prisma.file.create({
            data: {
                name: file.originalname,
                mimetype: file.mimetype,
                path: file.path,
                userId: req.params.id
            },
        });

        res.status(200).json({
            message: 'File uploaded successfully',
            file: savedFile,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error uploading file.');
    }
}
