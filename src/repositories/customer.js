const Customer = require('../models/customer.js');

class CustomerRepository {
  async GetAll() {
    return await Customer.findAll();
  }

  async GetById(id, transaction) {
    return await Customer.findOne({
      where: { id },
      transaction,
    });
  }

  async Add(customer, transaction) {
    await Customer.create(customer, { transaction });
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
