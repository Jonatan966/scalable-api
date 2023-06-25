import {
  IExampleRepositoryInMemory,
  makeExampleRepositoryInMemory,
} from '@/example/repositories/exampleRepository/in-memory';
import { describe, beforeEach, it, expect } from 'vitest';

import { makeCreateExampleUseCase } from './index';

let exampleRepositoryInMemory: IExampleRepositoryInMemory;
let createExampleUseCase: ReturnType<typeof makeCreateExampleUseCase>;

describe('Create Example', () => {
  beforeEach(() => {
    exampleRepositoryInMemory = makeExampleRepositoryInMemory();
    createExampleUseCase = makeCreateExampleUseCase(exampleRepositoryInMemory);
  });

  it('should be able to create an example', async () => {
    await createExampleUseCase('Foo Bar');

    expect(exampleRepositoryInMemory.examples.length).toBe(1);
    expect(exampleRepositoryInMemory.examples[0]).toHaveProperty(
      'name',
      'Foo Bar'
    );
    expect(exampleRepositoryInMemory.examples[0]).toHaveProperty('id');
  });
});
