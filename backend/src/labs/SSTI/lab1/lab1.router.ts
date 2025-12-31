import { Router } from "express";
import {lab1controller ,resetLab1 ,getComments}  from "./lab1.controller";

const lab1SSTI = Router();

// In your routes file
lab1SSTI.post('/SSTI1Comments', lab1controller);

lab1SSTI.get('/SSTI1Comments', getComments);


lab1SSTI.get('/SSTIlab1Reset', resetLab1);


export default lab1SSTI;