import e, { Router } from "express";
import { loginController, isAdmin, deleteUser,createUser } from "./lab2.controller";

let lab2jwtRouter = Router();

lab2jwtRouter.post("/lab2jwt/login", loginController);

lab2jwtRouter.delete("/lab2jwt/deleteuser", deleteUser );
lab2jwtRouter.post("/lab2jwt/createuser", createUser );


export default lab2jwtRouter;
