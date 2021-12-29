import { Router } from 'express';
import taskRouter from './routes/tasks.routes';

const router = Router();

router.use('/tasks', taskRouter);

export default router;
