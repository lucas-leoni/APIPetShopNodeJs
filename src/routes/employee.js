const express = require('express');
const EmployeeController = require('../controllers/employee');
const authMiddleware = require('../middleware/auth');

const employeeController = new EmployeeController();
const router = express.Router();

router.get('/api/employees', authMiddleware, employeeController.GetAll);
router.get('/api/employee/:id', authMiddleware, employeeController.GetById);
router.post('/api/employee', authMiddleware, employeeController.Add);
router.put('/api/employee/:id', authMiddleware, employeeController.Update);
router.delete('/api/employee/:id', authMiddleware, employeeController.Delete);

module.exports = router;