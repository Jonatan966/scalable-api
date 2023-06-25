import { IExampleRepository } from '@/example/repositories/exampleRepository';

export function makeCreateExampleUseCase(
  exampleRepository: IExampleRepository
) {
  return async (name: string) => {
    await exampleRepository.create(name);
  };
}
