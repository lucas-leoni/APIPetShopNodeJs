const express = require('express');
const CustomerController = require('../controllers/customer');

const customerController = new CustomerController();

const router = express.Router();

router.get('/api/customers', customerController.GetAll);
router.get('/api/customer/:id', customerController.GetById);
router.post('/api/customer', customerController.Add);
router.put('/api/customer/:id', customerController.Update);
router.delete('/api/customer/:id', customerController.Delete);

module.exports = router;
