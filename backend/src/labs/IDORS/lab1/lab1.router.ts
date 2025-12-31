import {Router} from 'express';
import {getPdfs,getPdf} from './lab1.controller';

const lab1IDORSRouter = Router();

lab1IDORSRouter.get('/IDORSlab1', getPdfs);
lab1IDORSRouter.get('/IDORSlab1/:id', getPdf);

export default lab1IDORSRouter;