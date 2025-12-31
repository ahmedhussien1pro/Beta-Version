import {Router} from "express";
import {deleteRegister, register, viewRegister} from "./lab1.controller";

let lab1RaceCondition = Router();

lab1RaceCondition.post("/RaceConditionRegister", register);

lab1RaceCondition.get("/RaceConditionViewRegister", viewRegister);

lab1RaceCondition.delete("/RaceConditionDeleteRegister/:id", deleteRegister);


export default lab1RaceCondition;