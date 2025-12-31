
import {Router} from 'express';
import {carPage} from './lab3.controller';

const lab3fileInclusion = Router();

lab3fileInclusion.get('/fileInclusionLab3', carPage);

export default lab3fileInclusion;