
import {Router} from 'express';
import {fruitPage} from './lab2.controller';

const lab2fileInclusion = Router();

lab2fileInclusion.get('/fileInclusionLab2', fruitPage);

export default lab2fileInclusion;