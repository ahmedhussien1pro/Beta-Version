import express from "express";
import {
  getLabAccount,
  updateLabEmail,
  deleteAccount,
  affirmation,
  applyExploit,
  getExploit,
  login,
} from "./lab1.controller";

const clickJackLab1 = express.Router();

// Account and update routes
clickJackLab1.get("/clickJackLab1-account", getLabAccount);
clickJackLab1.post("/clickJackLab1-edit-info", updateLabEmail);

// Delete account endpoint (returns SweetAlert + redirect)
clickJackLab1.post("/clickJackLab1-delete-account", deleteAccount);

// Affirmation route (redirect target after deletion)
clickJackLab1.get("/affirmation", affirmation);

// Exploit endpoints
clickJackLab1.post("/clickJackLab1-apply-exploit", applyExploit);
clickJackLab1.get("/clickJackLab1-apply-exploit", getExploit);

// Login endpoint (simulation)
clickJackLab1.post("/clickJackLab1-login", login);

export default clickJackLab1;
