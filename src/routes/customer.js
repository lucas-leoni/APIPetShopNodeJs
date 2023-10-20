const express = require('express');
const CustomerController = require('../controllers/customer');
const authMiddleware = require('../middleware/auth');

const customerController = new CustomerController();
const router = express.Router();

router.get('/api/customers', authMiddleware, customerController.GetAll);
router.get('/api/customer/:id', authMiddleware, customerController.GetById);
router.post('/api/customer', authMiddleware, customerController.Add);
router.put('/api/customer/:id', authMiddleware, customerController.Update);
router.delete('/api/customer/:id', authMiddleware, customerController.Delete);

module.exports = router;
