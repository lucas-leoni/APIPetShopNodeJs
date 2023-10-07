const ServiceRepository = require('../repositories/service.js');
const repository = new ServiceRepository();

class Service {
  CheckService(service) {
    if (!service) {
      throw new Error('Service to add was not provided');
    } else if (!service.date) {
      throw new Error('Service date was not provided');
    } else if (!service.time) {
      throw new Error('Service time was not provided');
    } else if (!service.price) {
      throw new Error('Service price was not provided');
    } else if (!service.completed) {
      throw new Error('Service completed was not provided');
    }

    return true;
  }

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id, transaction) {
    return repository.GetById(id, transaction);
  }

  async Add(service, transaction) {
    this.CheckService(service);
    if (!service.dogId) {
      throw new Error('Service dogId was not provided');
    }
    return repository.Add(service, transaction);
  }

  async Update(id, service) {
    if (!id) {
      throw new Error('Missing service id for updates');
    }
    this.CheckService(service);
    return repository.Update(id, service);
  }

  async Delete(id) {
    return repository.Delete(id);
  }
}

module.exports = Service;
