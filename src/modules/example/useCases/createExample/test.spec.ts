import 'reflect-metadata';

import { ExampleRepositoryInMemory } from '@/example/repositories/exampleRepository/in-memory';

import { CreateExampleUseCase } from './index';

let exampleRepositoryInMemory: ExampleRepositoryInMemory;
let createExampleUseCase: CreateExampleUseCase;

describe('Create Example', () => {
  beforeEach(() => {
    exampleRepositoryInMemory = new ExampleRepositoryInMemory();
    createExampleUseCase = new CreateExampleUseCase(exampleRepositoryInMemory);
  });

  it('should be able to create an example', async () => {
    await createExampleUseCase.execute('Foo Bar');

    expect(exampleRepositoryInMemory.examples.length).toBe(1);
    expect(exampleRepositoryInMemory.examples[0]).toHaveProperty(
      'name',
      'Foo Bar'
    );
    expect(exampleRepositoryInMemory.examples[0]).toHaveProperty('id');
  });
});
