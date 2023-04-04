import { Router } from 'express';

import { CreateExampleController } from '../../../../modules/example/controllers/createExample';

const exampleRoutes = Router();

const exampleController = new CreateExampleController();

exampleRoutes.get('/', exampleController.handle);

export { exampleRoutes };
