const EmployeeService = require('../services/employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const service = new EmployeeService();

class EmployeeController {
  async GetAll(req, res) {
    try {
      const employee = await service.GetAll();
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const employee = await service.GetById(id);
      res.status(200).json(employee);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const employee = req.body;
      await service.Add(employee);
      res.status(201).json({
        message: 'Employee added successfully!',
        employee: employee,
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
      let employee = await service.GetById(id);
      employee = req.body;
      await service.Update(id, employee);
      res.status(200).json({
        message: 'Employee updated successfully!',
        employee: employee,
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
        message: 'Employee deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = EmployeeController;
