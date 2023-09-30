const Customer = require('../models/customer.js');

class CustomerRepository {
  async GetAll() {
    return await Customer.findAll();
  }

  async GetById(id) {
    return await Customer.findOne({
      where: { id },
    });
  }

  async Add(customer) {
    await Customer.create(customer);
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
