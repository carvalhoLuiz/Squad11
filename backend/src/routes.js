import { Router } from 'express';

import HellowController from './app/controller/HellowController/HellowController';

const routes = new Router();

routes.get('/', HellowController.hellow);

export default routes;
