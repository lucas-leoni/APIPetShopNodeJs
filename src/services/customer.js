const CustomerRepository = require('../repositories/customer.js');
const repository = new CustomerRepository();

class CustomerService {
  errorMessageCustomer = 'Provide all data!';
  indexErrorMessage = 'Invalid index!';

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id, transaction) {
    return repository.GetById(id, transaction);
  }

  async Add(customer, transaction) {
    if (!customer) {
      throw new Error(this.errorMessageCustomer);
    }
    repository.Add(customer, transaction);
  }

  async Update(id, customer) {
    if (!customer) {
      throw new Error(this.errorMessageCustomer);
    } else if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Update(id, customer);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Delete(id);
  }
}

module.exports = CustomerService;
