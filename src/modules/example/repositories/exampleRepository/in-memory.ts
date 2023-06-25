import { v4 } from 'uuid';

import { Example } from './entity';
import { IExampleRepository } from './index';

export interface IExampleRepositoryInMemory extends IExampleRepository {
  examples: Example[];
}

export function makeExampleRepositoryInMemory(): IExampleRepositoryInMemory {
  const examples: Example[] = [];

  return {
    examples,
    async create(name: string): Promise<void> {
      examples.push({
        id: v4(),
        name,
      });
    },
  };
}
