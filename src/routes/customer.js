const express = require('express');
const CustomerController = require('../controllers/customer');

const controller = new CustomerController();
const router = express.Router();

router.get('/api/customers', controller.GetAll);
router.get('/api/customer/:id', controller.GetById);
router.post('/api/customer', controller.Add);
router.put('/api/customer/:id', controller.Update);
router.delete('/api/customer/:id', controller.Delete);

module.exports = router;
