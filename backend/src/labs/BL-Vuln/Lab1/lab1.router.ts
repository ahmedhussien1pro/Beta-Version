import express from "express";
import { addToCart, getCart, checkoutCart, loginUser } from "./lab1.controller";

const bLVulnRouter = express.Router();

// Login endpoint
bLVulnRouter.post("/bLVuln-login", loginUser);

// Cart endpoints
bLVulnRouter.post("/bLVuln-cart", addToCart);
bLVulnRouter.get("/bLVuln-cart/:userId", getCart);
bLVulnRouter.post("/bLVuln-cart/checkout/:userId", checkoutCart);

export default bLVulnRouter;
