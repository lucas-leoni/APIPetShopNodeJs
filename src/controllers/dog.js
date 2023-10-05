const DogService = require('../services/dog');
const service = new DogService();

class DogController {
  async GetAll(req, res) {
    try {
      const dogs = await service.GetAll();
      res.status(200).json(dogs);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const dogs = await service.GetById(id);
      res.status(200).json(dogs);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const dog = req.body;
      await service.Add(dog);
      res.status(201).json({
        message: 'Dog added successfully!',
        dog: dog,
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
      let dog = await service.GetById(id);
      dog = req.body;
      await service.Update(id, dog);
      res.status(200).json({
        message: 'Dog updated successfully!',
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
        message: 'Dog deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = DogController;
