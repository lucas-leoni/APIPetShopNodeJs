const Employee = require('../models/employee.js');

class EmployeeRepository {
  async GetAll() {
    return await Employee.findAll();
  }

  async GetById(id) {
    return await Employee.findOne({
      where: { id },
    });
  }

  async Add(employee, transaction) {
    const result = await Employee.create(employee, { transaction });
    return result;
  }

  async Update(id, employee) {
    await Employee.update(employee, {
      where: { id },
    });
  }

  async Delete(id) {
    await Employee.destroy({
      where: { id },
    });
  }
}

module.exports = EmployeeRepository;
