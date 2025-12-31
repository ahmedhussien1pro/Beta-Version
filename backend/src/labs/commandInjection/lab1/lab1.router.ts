import {Router} from "express";
import {commandInjectionLab1} from "./lab1.controller";

let lab1CommendInjection = Router();

lab1CommendInjection.post ("/commendInjectionLab1", commandInjectionLab1);

export default lab1CommendInjection;