const ServiceServico = require('../services/service');
const servico = new ServiceServico();

class ServiceController {
  async GetAll(req, res) {
    try {
      const result = await servico.GetAll();
      res.status(200).json({
        services: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const result = await servico.GetById(id);
      res.status(200).json({
        service: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const service = req.body;
      const result = await servico.Add(service);
      res.status(201).json({
        service: result,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Update(req, res) {
    try {
      const result = await servico.Update(req.params.id, req.body);
      res.status(200).json({
        service: result,
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
      await servico.Delete(id);
      res.status(200).json({
        message: 'Service deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = ServiceController;
