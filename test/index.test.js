const { describe, expect, it, beforeAll, afterAll } = require('@jest/globals');
const CustomerService = require('../src/services/customer');
const connection = require('../src/database');

describe('Testes', () => {
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

  it('Should create a person', async () => {
    const result = await service.Add(
      {
        name: 'joao',
        email: 'teste2@teste.com',
        telephone: '1293456789',
        dogs: [
          {
            name: 'Totó',
            breed: 'vira-lata',
            customer_id: 1,
          },
        ],
      },
      this.save
    );

    // Verificar a mensagem
    expect(result.message).toBe('Customer added successfully!');

    // Verificar os detalhes do cliente
    expect(result.customer.name).toBe('joao');
    expect(result.customer.email).toBe('teste2@teste.com');
    expect(result.customer.telephone).toBe('1293456789');

    // Aqui você pode adicionar mais verificações, se necessário, para os detalhes dos cachorros
    expect(result.customer.dogs).toHaveLength(1);
    expect(result.customer.dogs[0].name).toBe('Totó');
    expect(result.customer.dogs[0].breed).toBe('vira-lata');
  });
});
