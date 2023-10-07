const DogRepository = require('../repositories/dog.js');
const repository = new DogRepository();

class DogService {
  CheckDog(dog) {
    if (!dog) {
      throw new Error('Dog to add was not provided');
    } else if (!dog.name) {
      throw new Error('Dog name was not provided');
    } else if (!dog.breed) {
      throw new Error('Dog breed was not provided');
    }

    return true;
  }

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id, transaction) {
    return repository.GetById(id, transaction);
  }

  async Add(dog, transaction) {
    this.CheckDog(dog);
    if (!dog.customerId) {
      throw new Error('Dog customerId was not provided');
    }
    return repository.Add(dog, transaction);
  }

  async Update(id, dog) {
    if (!id) {
      throw new Error('Missing dog id for updates');
    }
    this.CheckDog(dog);
    return repository.Update(id, dog);
  }

  async Delete(id) {
    return repository.Delete(id);
  }
}

module.exports = DogService;
