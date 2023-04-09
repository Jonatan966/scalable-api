import { CreateExampleUseCase } from '@/example/useCases/createExample';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { z } from 'zod';

const createExampleScheme = z.object({
  name: z.string().nonempty(),
});

class CreateExampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = createExampleScheme.parse(request.body);

    const createExampleUseCase = container.resolve(CreateExampleUseCase);

    await createExampleUseCase.execute(name);

    return response.sendStatus(201);
  }
}

export { CreateExampleController };
