const Dog = require('../models/dog.js');
const Service = require('../models/service.js');

class ServiceRepository {
  async GetAll() {
    return await Service.findAll();
  }

  async GetById(id, transaction) {
    return await Service.findOne({
      where: { id },
      include: [{ model: Dog, as: 'dog' }],
      transaction,
    });
  }

  async Add(service, transaction) {
    const result = await Service.create(service, { transaction });

    return result;
  }

  async Update(id, service) {
    const result = await Service.update(service, {
      where: { id },
    });

    return result;
  }

  async Delete(id) {
    await Service.destroy({
      where: { id },
    });
  }
}

module.exports = ServiceRepository;
