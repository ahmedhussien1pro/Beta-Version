import { Router } from "express";

import { images, image } from "./lab3.controller";

let lab3BurpSuite = Router();

lab3BurpSuite.get("/burpsuitelab3",images);

lab3BurpSuite.get("/burpsuitelab3/:id",image);

export default lab3BurpSuite;