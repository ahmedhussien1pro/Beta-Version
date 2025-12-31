import {Router} from 'express';
import { getBalance, bookingTickets } from './lab2.controller';

const lab2IDORSRouter = Router();

lab2IDORSRouter.get('/IDORSlab2', getBalance);

lab2IDORSRouter.post('/IDORSlab2', bookingTickets);

export default lab2IDORSRouter;