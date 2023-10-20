const express = require('express');
const DogController = require('../controllers/dog');
const authMiddleware = require('../middleware/auth');

const dogController = new DogController();
const router = express.Router();

router.get('/api/dogs', authMiddleware, dogController.GetAll);
router.get('/api/dog/:id', authMiddleware, dogController.GetById);
router.post('/api/dog', authMiddleware, dogController.Add);
router.put('/api/dog/:id', authMiddleware, dogController.Update);
router.delete('/api/dog/:id', authMiddleware, dogController.Delete);

module.exports = router;