import {Router} from "express";
import {createXssPost, deletePosts} from "./lab2.controller";


let lab2xss = Router();

lab2xss.post("/comment", createXssPost);
lab2xss.delete("/comment", deletePosts);

export default lab2xss;