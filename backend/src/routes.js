import { Router } from 'express';

import UsuarioController from './app/controller/UsuarioController/UsuarioController';
import SessionController from './app/controller/UsuarioController/SessionController';
import FilaController from './app/controller/FilaController/FilaController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/registrar', UsuarioController.store);
routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.post('/fila', FilaController.store);

export default routes;
