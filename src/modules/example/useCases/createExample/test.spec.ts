import 'reflect-metadata';
import { expect, describe, it, beforeEach } from 'vitest';

import { IExampleRepository } from '../../repositories/exampleRepository';
import { ExampleRepositoryInMemory } from '../../repositories/exampleRepository/in-memory';
import { CreateExampleUseCase } from './index';

let exampleRepositoryInMemory: IExampleRepository;
let createExampleUseCase: CreateExampleUseCase;

describe('Create Example', () => {
  beforeEach(() => {
    exampleRepositoryInMemory = new ExampleRepositoryInMemory();
    createExampleUseCase = new CreateExampleUseCase(exampleRepositoryInMemory);
  });

  it('should be able to test', async () => {
    const result = await createExampleUseCase.execute();

    expect(result).toBe(undefined);
  });
});
