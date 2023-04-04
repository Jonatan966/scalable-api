import { Example } from './entity';
import { IExampleRepository } from './index';

class ExampleRepositoryInMemory implements IExampleRepository {
  examples: Example[] = [];

  async create(): Promise<void> {
    return undefined;
  }
}

export { ExampleRepositoryInMemory };
