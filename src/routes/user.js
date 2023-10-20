const express = require('express');
const UserController = require('../controllers/user');
const authMiddleware = require('../middleware/auth');

const userController = new UserController();
const router = express.Router();

router.post('/api/login', userController.Login);
router.get('/api/users', authMiddleware, userController.GetAll);
router.get('/api/user/:id', authMiddleware, userController.GetById);
router.post('/api/user', authMiddleware, userController.Add);
router.put('/api/user/:id', authMiddleware, userController.Update);
router.delete('/api/user/:id', authMiddleware, userController.Delete);

module.exports = router;
