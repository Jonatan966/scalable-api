import { IExampleRepository } from '@/example/repositories/exampleRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateExampleUseCase {
  constructor(
    @inject('ExampleRepository')
    private exampleRepository: IExampleRepository
  ) {}

  async execute(name: string) {
    await this.exampleRepository.create(name);
  }
}

export { CreateExampleUseCase };
