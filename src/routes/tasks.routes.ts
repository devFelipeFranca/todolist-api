import { Router } from 'express';
import * as useTaskController from '../controller/TaskController';

const routes = Router();

routes.get('/', useTaskController.getTasks);
routes.get('/:id', useTaskController.getTask);
routes.post('/', useTaskController.saveTask);
routes.put('/:id', useTaskController.updateTask);
routes.patch('/:id', useTaskController.finishTask);
routes.delete('/:id', useTaskController.removeTask);

export default routes;
