import prisma from "../../../utilities/db";
import e, {Request, Response} from "express";


export async function createXssPost(req: Request, res: Response) {
    try {
        const email = req.body.email;
        const content = req.body.content;

        // Upsert user by email
        const user = await prisma.userForXSS.upsert({
            where: { email },
            update: {}, // No update needed if the user exists
            create: {
                email,
            },
        });

        // Create the post
        const post = await prisma.post.create({
            data: {
                content,
                userId: user.id,
            },
        });

        return res.status(200).json({
            msg: "Post created successfully",
            data: {
                post: post,
            },
        });
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({
            error: 'Error creating post',
        });
    }
}

export async function deletePosts(req: Request, res: Response) {
    try {
        await prisma.post.deleteMany({});

        return res.status(200).json({
            message: 'All posts have been deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting posts:', error);
        return res.status(500).json({
            error: 'Error deleting posts',
        });
    }
}