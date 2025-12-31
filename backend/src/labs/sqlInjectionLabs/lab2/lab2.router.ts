import {Router} from "express"
import {findReleasedProduct} from "./lab2.controller";

let lab2sql = Router();

lab2sql.get("/lab2sql", findReleasedProduct);

export default lab2sql;