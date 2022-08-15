const { Router } = require('express');

const router = Router();
const { createEmpleado, createEmpleadoWithPerson, getEmpleado, updateEmployee, getOneEmployee, inactivarEmployee } = require('../controllers/empleado.controller');

//api/empleado/
router.post('/', createEmpleado);
router.post('/persona/', createEmpleadoWithPerson);

// /api/empleado/:empleadoid
router.get('/:companyid', getEmpleado);
router.get('/one/:id', getOneEmployee)
router.put('/:id', updateEmployee);
router.put('/inactivar/:id', inactivarEmployee)

module.exports = router;