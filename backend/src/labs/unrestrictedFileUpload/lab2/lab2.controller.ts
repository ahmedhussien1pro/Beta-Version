import multer from 'multer';
import prisma from "../../../utilities/db";

// Configure multer with a file filter for images
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
        // Check the file type
        const allowedMimeTypes = ['image/jpeg', 'image/png','image/jpg', 'image/gif'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error('Only image files are allowed!'), false); // Reject the file
        }
    },
});

// Save the file details to the database
export async function saveImage(req, res) {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded or unsupported file type.');
        }

        const savedFile = await prisma.file.create({
            data: {
                name: file.originalname,
                mimetype: file.mimetype,
                path: file.path,
                userId: req.params.id,
            },
        });

        res.status(200).json({
            message: 'File uploaded successfully',
            file: savedFile,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message || 'Error uploading file.');
    }
}
