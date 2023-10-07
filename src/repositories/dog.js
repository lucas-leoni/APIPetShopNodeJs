const Dog = require('../models/dog.js');
const Service = require('../models/service.js');

class DogRepository {
  async GetAll() {
    return await Dog.findAll();
  }

  async GetById(id, transaction) {
    return await Dog.findOne({
      where: { id },
      include: [{ model: Service, as: 'services' }],
      transaction,
    });
  }

  async Add(dog, transaction) {
    const result = await Dog.create(dog, { transaction });

    return result;
  }

  async Update(id, dog) {
    const result = await Dog.update(dog, {
      where: { id },
    });

    return result;
  }

  async Delete(id) {
    await Dog.destroy({
      where: { id },
    });
  }
}

module.exports = DogRepository;
