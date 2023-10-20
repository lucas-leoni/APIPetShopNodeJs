const UserService = require('../services/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const service = new UserService();

class UserController {
  async GetAll(req, res) {
    try {
      const user = await service.GetAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async GetById(req, res) {
    try {
      const id = req.params.id;
      const user = await service.GetById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Add(req, res) {
    try {
      const user = req.body;
      await service.Add(user);
      res.status(201).json({
        message: 'User added successfully!',
        user: user,
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
      let user = await service.GetById(id);
      user = req.body;
      await service.Update(id, user);
      res.status(200).json({
        message: 'User updated successfully!',
        user: user,
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
        message: 'User deleted successfully!',
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  async Login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const { dataValues: user } = await service.GetByEmail(email);

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        config.secret
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = UserController;
