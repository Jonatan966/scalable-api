import { container } from 'tsyringe';

import './providers';
import { IExampleRepository } from '../../modules/example/repositories/exampleRepository';
import { ExampleRepository } from '../../modules/example/infra/prisma/repositories/ExampleRepository';

container.registerSingleton<IExampleRepository>(
  'ExampleRepository',
  ExampleRepository
);
