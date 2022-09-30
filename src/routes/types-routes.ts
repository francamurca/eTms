import { Router } from 'express';
import * as typesController from '../controllers/typesController';

const route = Router();

route.get("/datatypes/:datatype", new typesController.DataTypes().dataTypes)

export default route;