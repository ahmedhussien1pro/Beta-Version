import {Router} from "express";
import {upload,saveFile} from "./lab1.controller";
import {isAuthenticated} from "../../../utilities/auth";


let lab1UnrestrictedFile=Router();

lab1UnrestrictedFile.post("/unrestrictedFileUploadLab1",isAuthenticated,upload.single("input_file"),saveFile);

export default lab1UnrestrictedFile;
