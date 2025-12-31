import {Router} from "express";
import {deleteComments, getComments, lab1controller, verifyCaptcha} from "./lab1.controller";

let lab1capatcha = Router();

lab1capatcha.get("/capatchalab1",lab1controller );

lab1capatcha.get("/capatchalab1comments",getComments );

lab1capatcha.post("/capatchalab1", verifyCaptcha);

lab1capatcha.delete("/capatchalab1", deleteComments);


export default lab1capatcha;