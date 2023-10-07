const express = require('express');
const ServiceController = require('../controllers/service');

const serviceController = new ServiceController();

const router = express.Router();

router.get('/api/services', serviceController.GetAll);
router.get('/api/service/:id', serviceController.GetById);
router.post('/api/service', serviceController.Add);
router.put('/api/service/:id', serviceController.Update);
router.delete('/api/service/:id', serviceController.Delete);

module.exports = router;
