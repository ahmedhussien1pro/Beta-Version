import {Router} from "express";
import { deleteComments, lab2controller, verifySum, getComments} from "./lab2.controller";
let lab2captcha = Router();

lab2captcha.get("/capatchalab2",lab2controller );

lab2captcha.post("/capatchalab2", verifySum);

lab2captcha.get("/capatchalab2comments",getComments );

lab2captcha.delete("/capatchalab2",deleteComments );


export default lab2captcha;