import { Router } from 'express';

import * as veiculoController from '../controllers/veiculoController';

const route = Router();
//Pessoa
route.get('/veiculo', new veiculoController.VeiculoController().findAll);

route.get('/veiculo/buscaPorId/:id', new veiculoController.VeiculoController().findOne);

route.get('/veiculo/buscaPorPlaca/:doc', new veiculoController.VeiculoController().findDoc);

route.post("/veiculo/insert", new veiculoController.VeiculoController().create)

route.put("/veiculo/update/:id", new veiculoController.VeiculoController().update)

export default route;