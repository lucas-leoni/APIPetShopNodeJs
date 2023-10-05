const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals');
const CustomerService = require('../src/services/customer');
const connection = require('../src/database');

describe('Testes do primeiro exercício', () => {
  const service = new CustomerService();
  let save;

  beforeAll(async () => {
    this.save = await connection.transaction();
  });

  afterAll(async () => {
    this.save.rollback();
  });

  it('Should get person', async () => {
    const result = await service.GetById(1, this.save);

    expect(result.id).toBe(1);
    expect(result.name).toBe('Lucas Leoni');
    expect(result.telephone).toBe('47997011007');
  });

  /* it('Should create a person', async () => {
    const result = await service.Add(
      {
        name: 'joao',
        email: 'teste2@teste.com',
        telephone: '1293456789',
      },
      this.save
    );

    this.id = result.id;

    expect(result.name).toBe('joao');
    expect(result.email).toBe('teste2@teste.com');
    expect(result.telephone).toBe('1293456789');
  }); */
});
