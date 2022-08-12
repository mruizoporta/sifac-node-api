import { Router } from 'express';

const router = Router();
import { createEmpleado, createEmpleadoWithPerson, getEmpleado, updateEmployee, getOneEmployee, inactivarEmployee } from '../controllers/empleado.controller';

//api/empleado/
router.post('/', createEmpleado);
router.post('/persona/', createEmpleadoWithPerson);

// /api/empleado/:empleadoid
router.get('/:companyid', getEmpleado);
router.get('/one/:id', getOneEmployee)
router.put('/:id', updateEmployee);
router.put('/inactivar/:id', inactivarEmployee)

module.exports = router;