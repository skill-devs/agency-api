import express from 'express';
import { HomeController } from '../controllers';

const apiRouter = express.Router(); // eslint-disable-line

apiRouter.get('/test', HomeController.test);

export default apiRouter;
