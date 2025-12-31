import { Router } from "express";
import { getAccounts, getAccount, transfer } from "./lab3.controller";

const CSRFLab3 = Router();

CSRFLab3.get("/CSRF-accounts", getAccounts);
CSRFLab3.get("/CSRF-account/:id", getAccount);
CSRFLab3.post("/CSRF-transfer", transfer);

export default CSRFLab3;
