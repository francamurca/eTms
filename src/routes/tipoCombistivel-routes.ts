import { Router } from 'express';

import * as tipoCombustivel from '../controllers/tipoCombustivelController';

const route = Router();

route.get('/combustivel', new tipoCombustivel.TipoCombustivelController().findAll);

route.get('/combustivel/buscaPorId/:id', new tipoCombustivel.TipoCombustivelController().findOne);

route.post("/combustivel/insert", new tipoCombustivel.TipoCombustivelController().create)

route.put("/combustivel/update/:id", new tipoCombustivel.TipoCombustivelController().update)

export default route;