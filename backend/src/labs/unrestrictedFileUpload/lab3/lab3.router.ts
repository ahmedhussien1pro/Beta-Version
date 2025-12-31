import {Router} from "express";
import {upload,saveFile} from "./lab3.controller";
import {isAuthenticated} from "../../../utilities/auth";


let lab3UnrestrictedFile=Router();

lab3UnrestrictedFile.post("/unrestrictedFileUploadLab3",isAuthenticated,upload.single("file"),saveFile);

export default lab3UnrestrictedFile;
