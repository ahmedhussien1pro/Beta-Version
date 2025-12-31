
import {Router} from 'express';
import {cityPage} from './lab1.controller';

const lab1fileInclusion = Router();

lab1fileInclusion.get('/fileInclusionLab1', cityPage);

export default lab1fileInclusion;