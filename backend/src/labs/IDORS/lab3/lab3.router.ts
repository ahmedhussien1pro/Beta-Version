import e, {Router} from 'express';
import { getAccounts, getAccount, transfer, resetAccounts  } from './lab3.controller';

const lab3IDORSRouter = Router();

lab3IDORSRouter.get('/accounts', getAccounts);
lab3IDORSRouter.get('/account/:id', getAccount);
lab3IDORSRouter.post('/transfer', transfer);
lab3IDORSRouter.patch('/accounts', resetAccounts);

export default lab3IDORSRouter;