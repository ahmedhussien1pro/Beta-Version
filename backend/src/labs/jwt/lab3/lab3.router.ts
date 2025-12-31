import e, { Router } from "express";
import { loginController, isAdmin, deleteUser,createUser } from "./lab3.controller";

let lab3jwtRouter = Router();

lab3jwtRouter.post("/lab3jwt/login", loginController);

lab3jwtRouter.delete("/lab3jwt/deleteuser", deleteUser );
lab3jwtRouter.post("/lab3jwt/createuser", createUser );


export default lab3jwtRouter;
