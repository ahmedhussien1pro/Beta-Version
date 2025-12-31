import {Router} from "express";
import {login} from "./lab2.controller";

let lab2BrokenAuthRouter = Router();

lab2BrokenAuthRouter.post("/brokenAuthLab2", login);


export default lab2BrokenAuthRouter;