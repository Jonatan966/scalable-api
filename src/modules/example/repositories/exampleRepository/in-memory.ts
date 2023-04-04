import { IExampleRepository } from "./index";
import { Example } from "./entity";

class ExampleRepositoryInMemory implements IExampleRepository {
  examples: Example[] = [];

  async create(): Promise<void> {
      
  }
}

export { ExampleRepositoryInMemory };
