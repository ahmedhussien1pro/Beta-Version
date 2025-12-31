import {Router} from "express"
import {findProduct} from "./lab3.controller";

let lab3sql = Router();

lab3sql.get("/lab3sql", findProduct);

export default lab3sql;