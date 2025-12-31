import {Router} from "express";
import {login} from "./lab1.controller";

let lab1BrokenAuthRouter = Router();

lab1BrokenAuthRouter.post("/brokenAuthLab1", login);


export default lab1BrokenAuthRouter;