import { Router } from "express";
import { submitComment, getComments, deleteComments } from "./lab3.controller";

const lab3captcha = Router();

lab3captcha.post("/capatchalab3comments", submitComment);

lab3captcha.get("/capatchalab3comments", getComments);

lab3captcha.delete("/capatchalab3comments", deleteComments);

export default lab3captcha;
