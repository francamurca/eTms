import { Router } from 'express';

import * as bancoController from '../controllers/bancoController';

const route = Router();
//Pessoa
route.get('/banco', new bancoController.BancoController().findAll);

route.get('/banco/buscaPorId/:id', new bancoController.BancoController().findOne);

route.post("/banco/insert", new bancoController.BancoController().create)

route.put("/banco/update/:id", new bancoController.BancoController().update)


export default route;