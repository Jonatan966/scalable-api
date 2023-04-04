import { CreateExampleUseCase } from '@/example/useCases/createExample';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateExampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createExampleUseCase = container.resolve(CreateExampleUseCase);

    return response.json({ ok: true });
  }
}

export { CreateExampleController };
