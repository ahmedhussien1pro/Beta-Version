import {Router} from "express";
import {login} from "./lab3.controller";

let lab3BrokenAuthRouter = Router();

lab3BrokenAuthRouter.post("/brokenAuthLab3", login);


export default lab3BrokenAuthRouter;