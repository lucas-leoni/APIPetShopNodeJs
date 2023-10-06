const Customer = require('../models/customer.js');
const Dog = require('../models/dog.js');

class CustomerRepository {
  async GetAll() {
    return await Customer.findAll();
  }

  async GetById(id, transaction) {
    return await Customer.findOne({
      where: { id },
      include: [{ model: Dog, as: 'dogs' }],
      // include: ['cachorros'],
      transaction,
    });
  }

  async Add(customer, transaction) {
    const result = await Customer.create(customer, { transaction });
    return result;
  }

  async Update(id, customer) {
    await Customer.update(customer, {
      where: { id },
    });
  }

  async Delete(id) {
    await Customer.destroy({
      where: { id },
    });
  }
}

module.exports = CustomerRepository;
