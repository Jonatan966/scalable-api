import { IExampleRepository } from "../../../repositories/exampleRepository";

class ExampleRepository implements IExampleRepository {
  // private repository;

  // constructor() {
  //   this.repository = prisma.example;
  // }

  async create(): Promise<void> {
      
  }
}

export { ExampleRepository };
