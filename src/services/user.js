const UserRepository = require('../repositories/user.js');
const repository = new UserRepository();

class UserService {
  errorMessageUser = 'Provide all data!';
  indexErrorMessage = 'Invalid index!';

  async GetAll() {
    return repository.GetAll();
  }

  async GetById(id) {
    return repository.GetById(id);
  }

  async Add(user) {
    if (!user) {
      throw new Error(this.errorMessageUser);
    }
    repository.Add(user);
  }

  async Update(id, user) {
    if (!user) {
      throw new Error(this.errorMessageUser);
    } else if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Update(id, user);
  }

  async Delete(id) {
    if (!id || isNaN(id)) {
      throw new Error(this.indexErrorMessage);
    }
    repository.Delete(id);
  }

  async GetByEmail(email) {
    return repository.GetByEmail(email);
  }
}

module.exports = UserService;
