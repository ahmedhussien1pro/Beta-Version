import {Router} from "express";
import {upload,saveImage} from "./lab2.controller";
import {isAuthenticated} from "../../../utilities/auth";


let lab2UnrestrictedFile=Router();

lab2UnrestrictedFile.post("/unrestrictedFileUploadLab2",isAuthenticated,upload.single("input_image"),saveImage);

export default lab2UnrestrictedFile;
