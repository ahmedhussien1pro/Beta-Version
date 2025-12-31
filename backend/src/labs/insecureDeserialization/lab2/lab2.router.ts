import {Router} from "express";
import {loginController} from "./lab2.controller";

let lab2inscureDeserialization = Router();

lab2inscureDeserialization.post("/insecureDeserializationLab2", loginController);
export default lab2inscureDeserialization;