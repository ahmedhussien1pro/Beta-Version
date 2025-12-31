import { Request, Response } from "express";
import axios from "axios";
import { URLSearchParams } from "url";
import * as dotenv from "dotenv";
import prisma from "../../../utilities/db";

dotenv.config();

const SECRET_KEY = process.env.CAPTCHA_SECRET_KEY || "6LfMedcqAAAAABH8Dukegd_iwTIZ9Y43qL9jNKBA";

interface ReCaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  'error-codes'?: string[];
}

export const submitComment = async (req: Request, res: Response) => {
  const { comment, token } = req.body;

            // CAPTCHA is valid, store the comment
            await prisma.lab3captchaComment.create({
              data: {
                comment: comment,
              },
            }); 

  // ⚡ Bypass CAPTCHA verification for backend flexibility
  if (!token) {
    console.log("Bypassing CAPTCHA verification...");
    return res.json({ success: true, message: "Comment added successfully"});
  }

  try {
    // Verify CAPTCHA with Google
    const response = await axios.post<ReCaptchaResponse>(
      `https://www.google.com/recaptcha/api/siteverify`,
      new URLSearchParams({
        secret: SECRET_KEY,
        response: token,
      })
    );


    


    if (!response.data.success) {
      return res.status(400).json({ success: false, message: "Invalid CAPTCHA", errors: response.data['error-codes'] });
    }


    return res.status(200).json({ success: true, message: "Comment added successfully" });
  } catch (error) {
    console.error("Error verifying CAPTCHA:", error);
    return res.status(500).json({ success: false, message: "Server error during CAPTCHA verification" });
  }
};

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await prisma.lab3captchaComment.findMany({
      select: {
        comment: true,
      },
    });
    return res.status(200).json(comments);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal Server Error");
  }
}

export const deleteComments = async (req: Request, res: Response) => {
  try {
      await prisma.lab3captchaComment.deleteMany();
      return res.status(200).json({ message: "Comments deleted" });
  } catch (e) {
      console.error(e);
      return res.status(500).send("Internal Server Error");
  }
}