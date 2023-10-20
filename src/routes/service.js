const express = require('express');
const ServiceController = require('../controllers/service');
const authMiddleware = require('../middleware/auth');

const serviceController = new ServiceController();
const router = express.Router();

router.get('/api/services', authMiddleware, serviceController.GetAll);
router.get('/api/service/:id', authMiddleware, serviceController.GetById);
router.post('/api/service', authMiddleware, serviceController.Add);
router.put('/api/service/:id', authMiddleware, serviceController.Update);
router.delete('/api/service/:id', authMiddleware, serviceController.Delete);

module.exports = router;
