import express from 'express';
import { HomeController } from '../controllers';

const webRouter = express.Router(); // eslint-disable-line

webRouter.get('/test', HomeController.test);

webRouter.get('/campus', HomeController.index);

export default webRouter;
