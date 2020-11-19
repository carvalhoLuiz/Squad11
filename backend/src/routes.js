import { Router } from 'express';

import UsuarioController from './app/controller/UsuarioController/UsuarioController';
import SessionController from './app/controller/UsuarioController/SessionController';
import Hellow from './app/controller/HellowController/HellowController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/registrar', UsuarioController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.post('/hellow', Hellow.hellow);

export default routes;
