import { inject, injectable } from 'tsyringe';

import { IExampleRepository } from '../../repositories/exampleRepository';

@injectable()
class CreateExampleUseCase {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository
  ) {}

  async execute() {}
}

export { CreateExampleUseCase };
