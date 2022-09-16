import { Router } from 'express';

import * as pessoaController from '../controllers/pessoaController';
import * as typesController from '../controllers/typesController';

const route = Router();
//Pessoa
route.get('/pessoa', new pessoaController.PessoaController().findAll);

route.get('/pessoa/buscaPorId/:id', new pessoaController.PessoaController().findOne);

route.get('/pessoa/buscaPorDoc/:doc', new pessoaController.PessoaController().findDoc);

route.post("/pessoa/insert", new pessoaController.PessoaController().create)

route.put("/pessoa/update/:id", new pessoaController.PessoaController().update)

//fim Pessoa

//DataTypes

route.get("/datatypes/:datatype", new typesController.DataTypes().dataTypes)

export default route;