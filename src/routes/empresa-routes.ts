import { Router } from 'express';
import * as pessoaControler from '../controllers/empresaController'

const route = Router();

route.get('/empresa', new pessoaControler.EmpresaController().findAll);

route.get('/empresa/buscaPorUnidade/:unidade', new pessoaControler.EmpresaController().findOne);

route.post("/empresa/insert", new pessoaControler.EmpresaController().create)

route.put("/empresa/update/:id", new pessoaControler.EmpresaController().update)

export default route;