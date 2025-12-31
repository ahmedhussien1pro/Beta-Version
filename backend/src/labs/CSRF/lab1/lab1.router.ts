import express from "express";
import { getAccount, updatePassword, createAccount } from "./lab1.controller";

const lab1CSRF = express.Router();

// Route for getting the account information with the first ID
lab1CSRF.get("/account", getAccount);

// Route for updating the password of the first account
lab1CSRF.post("/update-password", updatePassword);

// Route for creating a new account
lab1CSRF.post("/create-account", createAccount);

export default lab1CSRF;
