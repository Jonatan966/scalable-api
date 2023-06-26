import { v4 } from 'uuid';

import { IExample } from './entity';
import { IExampleRepository } from './index';

export interface IExampleRepositoryInMemory extends IExampleRepository {
  examples: IExample[];
}

export function makeExampleRepositoryInMemory(): IExampleRepositoryInMemory {
  const examples: IExample[] = [];

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
