import {Router} from "express";
import {commandInjectionLab3} from "./lab3.controller";

let lab3CommendInjection = Router();

lab3CommendInjection.post ("/commendInjectionLab3", commandInjectionLab3);

export default lab3CommendInjection;