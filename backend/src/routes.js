import { Router } from 'express';

import UsuarioController from './app/controller/UsuarioController/UsuarioController';
import SessionController from './app/controller/UsuarioController/SessionController';

const routes = new Router();

routes.post('/registrar', UsuarioController.store);
routes.post('/login', SessionController.store);

export default routes;
