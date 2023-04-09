import { v4 } from 'uuid';

import { Example } from './entity';
import { IExampleRepository } from './index';

class ExampleRepositoryInMemory implements IExampleRepository {
  examples: Example[] = [];

  async create(name: string): Promise<void> {
    this.examples.push({
      id: v4(),
      name,
    });
  }
}

export { ExampleRepositoryInMemory };
