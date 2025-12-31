import { Router } from "express";
import { findOrCreateUser } from "./hiddenData.controller";

let hiddenData = Router();

hiddenData.post("/Loginsqlinjection", findOrCreateUser);

export default hiddenData;
