import { exampleRepository } from '@/example/infra/prisma/repositories/ExampleRepository';
import { makeCreateExampleUseCase } from '@/example/useCases/createExample';
import { Request, Response } from 'express';
import { z } from 'zod';

const createExampleScheme = z.object({
  name: z.string().nonempty(),
});

export const createExampleController = {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = createExampleScheme.parse(request.body);

    const createExampleUseCase = makeCreateExampleUseCase(exampleRepository);
    await createExampleUseCase(name);

    return response.sendStatus(201);
  },
};
