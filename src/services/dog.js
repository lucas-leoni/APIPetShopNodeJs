const DogRepository = require('../repositories/dog.js');
const repository = new DogRepository();

class DogService {
  errorMessageDog = 'Provide all data!';
  indexErrorMessage = 'Invalid index!';

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id) {
    return repository.GetById(id);
  }

  async Add(dog) {
    if (!dog) {
      throw new Error(this.errorMessageDog);
    }
    repository.Add(dog);
  }

  async Update(id, dog) {
    if (!dog) {
      throw new Error(this.errorMessageDog);
    } else if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Update(id, dog);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Delete(id);
  }
}

module.exports = DogService;
