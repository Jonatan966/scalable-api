interface IExampleRepository {
  create(name: string): Promise<void>;
}

export { IExampleRepository };
