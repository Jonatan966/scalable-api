import { createExampleController } from '@/example/controllers/createExample';
import { Router } from 'express';

const exampleRoutes = Router();

exampleRoutes.post('/', createExampleController.handle);

export { exampleRoutes };
