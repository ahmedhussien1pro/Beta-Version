import express from "express";
import { getUsers, deleteUser } from "./user.controller";

const userRouter = express.Router();

userRouter.get("/vulnUsers", getUsers);
userRouter.delete("/vulnUsers/:id", deleteUser);

export default userRouter;
