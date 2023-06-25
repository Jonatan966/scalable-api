import { prisma } from '@shared/infra/prisma';
import { v4 } from 'uuid';

import { IExampleRepository } from '../../../repositories/exampleRepository';

export function makeExampleRepository(): IExampleRepository {
  const repository = prisma.example;

  return {
    async create(name: string): Promise<void> {
      await repository.create({
        data: {
          name,
          id: v4(),
        },
      });
    },
  };
}

export const exampleRepository = makeExampleRepository();
