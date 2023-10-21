const EmployeeRepository = require('../repositories/employee.js');
const repository = new EmployeeRepository();

class EmployeeService {
  errorMessageEmployee = 'Provide all data!';
  indexErrorMessage = 'Invalid index!';

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id) {
    return repository.GetById(id);
  }

  async Add(employee) {
    if (!employee) {
      throw new Error(this.errorMessageEmployee);
    }
    repository.Add(employee);
  }

  async Update(id, employee) {
    if (!employee) {
      throw new Error(this.errorMessageEmployee);
    } else if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Update(id, employee);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Delete(id);
  }

  async GetByEmail(email) {
    return repository.GetByEmail(email);
  }
}

module.exports = EmployeeService;
