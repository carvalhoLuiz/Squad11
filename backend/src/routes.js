import { Router } from 'express';

import UsuarioController from './app/controller/UsuarioController/UsuarioController';

const routes = new Router();

routes.post('/registrar', UsuarioController.store);

export default routes;
