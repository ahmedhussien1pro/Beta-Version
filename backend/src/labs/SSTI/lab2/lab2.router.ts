import { Router } from "express";
import {lab2controller, products,resetLab2}  from "./lab2.controller";

const lab2SSTI = Router();

// In your routes file
lab2SSTI.post('/SSTIlab2/submitMessage', lab2controller);

lab2SSTI.post('/SSTIlab2/:id', products);

lab2SSTI.get('/SSTIlab2Reset', resetLab2);

export default lab2SSTI;