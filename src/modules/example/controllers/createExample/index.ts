import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateExampleUseCase } from '../../useCases/createExample';

class CreateExampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createExampleUseCase = container.resolve(CreateExampleUseCase);

    return response.json({ ok: true });
  }
}

export { CreateExampleController };
