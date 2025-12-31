import e, { Router } from "express";
import { loginController, isAdmin, deleteUser,createUser } from "./lab1.controller";

let lab1jwtRouter = Router();

lab1jwtRouter.post("/lab1jwt/login", loginController);

lab1jwtRouter.delete("/lab1jwt/deleteuser",isAdmin, deleteUser );
lab1jwtRouter.post("/lab1jwt/createuser",isAdmin, createUser );


export default lab1jwtRouter;
