import { CreateExampleController } from '@/example/controllers/createExample';
import { Router } from 'express';

const exampleRoutes = Router();

const exampleController = new CreateExampleController();

exampleRoutes.get('/', exampleController.handle);

export { exampleRoutes };
