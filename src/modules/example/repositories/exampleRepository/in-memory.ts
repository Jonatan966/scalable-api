import { v4 } from 'uuid';

import { Example } from './entity';

export function makeExampleRepositoryInMemory() {
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
