import { Prisma } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';
import { v4 } from 'uuid';

import { IExampleRepository } from '../../../repositories/exampleRepository';

class ExampleRepository implements IExampleRepository {
  private repository: Prisma.ExampleDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;

  constructor() {
    this.repository = prisma.example;
  }

  async create(name: string): Promise<void> {
    await this.repository.create({
      data: {
        name,
        id: v4(),
      },
    });
  }
}

export { ExampleRepository };
