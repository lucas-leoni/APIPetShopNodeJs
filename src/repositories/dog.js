const Dog = require('../models/dog.js');

class DogRepository {
  async GetAll() {
    return await Dog.findAll();
  }

  async GetById(id) {
    return await Dog.findOne({
      where: { id },
    });
  }

  async Add(dog) {
    await Dog.create(dog);
  }

  async Update(id, dog) {
    await Dog.update(dog, {
      where: { id },
    });
  }

  async Delete(id) {
    await Dog.destroy({
      where: { id },
    });
  }
}

module.exports = DogRepository;
