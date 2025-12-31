import {Router} from "express";
import {lab2Controller,} from "./lab2.controller";

let lab2 = Router();

lab2.post("/cookie_login_second", lab2Controller);


export default lab2;
