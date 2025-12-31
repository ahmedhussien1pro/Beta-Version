import {Router} from "express";
import {deleteUserImage, loginController, userImageById} from "./lab2.controller";

let lab2apiHacking = Router();

lab2apiHacking.post("/ApiHackinglab2", loginController);

lab2apiHacking.get("/wallpapers/:userId", userImageById);
lab2apiHacking.delete("/wallpapers/:userId/:id", deleteUserImage);


export default lab2apiHacking;