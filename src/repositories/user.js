const User = require('../models/user.js');
const bcrypt = require('bcrypt');

class UserRepository {
  async GetAll() {
    return await User.findAll();
  }

  async GetById(id) {
    return await User.findOne({
      where: { id },
    });
  }

  async Add(user, transaction) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    user.password = passwordHash;
    const result = await User.create(user, { transaction });

    return result;
  }

  async Update(id, user, transaction) {
    const passwordHash = await bcrypt.hash(user.password, 10);
    user.password = passwordHash;
    const result = await User.update(user, {
      transaction,
      where: { id },
    });

    return result;
  }

  async Delete(id) {
    await User.destroy({
      where: { id },
    });
  }

  async GetByEmail(email) {
    return User.findOne({
      where: { email },
    });
  }
}

module.exports = UserRepository;
