import express from "express";
import { CSRFLab2, getAllUsers } from "./lab2.controller";

const lab2CSRF = express.Router();
lab2CSRF.post("/CSRFLab2", CSRFLab2);
lab2CSRF.get("/getAllUsers", getAllUsers);

export default lab2CSRF;
