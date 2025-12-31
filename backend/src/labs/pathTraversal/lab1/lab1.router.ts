import {Router} from "express";
import {products, product, password} from "./lab1.controller";

let lab1PathTraversalRouter = Router();

lab1PathTraversalRouter.get ("/pathTraversalLab1Products", products);

lab1PathTraversalRouter.get ("/pathTraversalLab1Product/:id", product);

lab1PathTraversalRouter.get ("/pathTraversalLab1Product/etc/passwd" , password);

export default lab1PathTraversalRouter;