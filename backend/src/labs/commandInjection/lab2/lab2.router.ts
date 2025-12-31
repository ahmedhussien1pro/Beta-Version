import {Router} from "express";
import {commandInjectionLab2} from "./lab2.controller";

let lab2CommendInjection = Router();

lab2CommendInjection.post ("/commendInjectionLab2", commandInjectionLab2);

export default lab2CommendInjection;