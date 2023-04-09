import { CreateExampleController } from '@/example/controllers/createExample';
import { Router } from 'express';

const exampleRoutes = Router();

const createExampleController = new CreateExampleController();

exampleRoutes.post('/', createExampleController.handle);

export { exampleRoutes };
