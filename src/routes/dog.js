const express = require('express');
const DogController = require('../controllers/dog');

const dogController = new DogController();

const router = express.Router();

router.get('/api/dogs', dogController.GetAll);
router.get('/api/dog/:id', dogController.GetById);
router.post('/api/dog', dogController.Add);
router.put('/api/dog/:id', dogController.Update);
router.delete('/api/dog/:id', dogController.Delete);

module.exports = router;