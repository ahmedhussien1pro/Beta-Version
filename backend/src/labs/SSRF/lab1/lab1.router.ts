import { Router } from "express";
import { products , deleteUser, resetLab1} from "./lab1.controller";

const lab1SSRF = Router();

lab1SSRF.post("/SSRFLab/checkStock",products );
lab1SSRF.post("/SSRFLab/admin",resetLab1 );

lab1SSRF.delete("/SSRFLab/deleteUser/:username",deleteUser );

lab1SSRF.post("/SSRFLab/resetLab1",resetLab1 );
export default lab1SSRF;