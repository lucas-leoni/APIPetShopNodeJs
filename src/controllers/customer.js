const CustomerService = require('../services/customer');
const service = new CustomerService();

class CustomerController {
  async GetAll(req, res) {
    try {
      const customers = await service.GetAll();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const customer = await service.GetById(id);
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const customer = req.body;
      await service.Add(customer);
      res.status(201).json({
        message: 'Customer added successfully!',
        customer: customer,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Update(req, res) {
    try {
      const id = req.params.id;
      let customer = await service.GetById(id);
      customer = req.body;
      await service.Update(id, customer);
      res.status(200).json({
        message: 'Customer updated successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Delete(req, res) {
    try {
      const id = req.params.id;
      await service.Delete(id);
      res.status(200).json({
        message: 'Customer deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = CustomerController;
