import {Router} from "express";
import {loginController} from "./lab1.controller";

let lab1inscureDeserialization = Router();

lab1inscureDeserialization.post("/insecureDeserializationLab1", loginController);
export default lab1inscureDeserialization;