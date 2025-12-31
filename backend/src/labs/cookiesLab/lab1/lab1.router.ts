import {Router} from "express";
import {login} from "./lab1.controller";

let lab1 = Router();

lab1.post("/cookie_login", login);


export default lab1;