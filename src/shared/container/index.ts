import './providers';

import { ExampleRepository } from '@/example/infra/prisma/repositories/ExampleRepository';
import { IExampleRepository } from '@/example/repositories/exampleRepository';
import { container } from 'tsyringe';

container.registerSingleton<IExampleRepository>(
  'ExampleRepository',
  ExampleRepository
);
