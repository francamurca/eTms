import { Router } from 'express';

import * as pessoaController from '../controllers/pessoaController';
import * as typesController from '../controllers/typesController';
import * as pessoaControler from '../controllers/empresaController'

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

// fim DataTypes

//Empresa
route.get('/empresa', new pessoaControler.EmpresaController().findAll);

route.get('/empresa/buscaPorUnidade/:unidade', new pessoaControler.EmpresaController().findOne);

route.post("/empresa/insert", new pessoaControler.EmpresaController().create)

route.put("/empresa/update/:id", new pessoaControler.EmpresaController().update)
// fim Empresa

export default route;