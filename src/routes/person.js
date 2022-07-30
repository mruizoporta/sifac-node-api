import { Router } from 'express';

const router = Router();
import { createPerson, getPerson, getPersonClasification, updatePersona } from '../controllers/person.controller.js';

//api/person/
router.post('/', createPerson);
router.get('/:companyid', getPerson)
router.get('/cal/:tipopersona', getPersonClasification)
router.put('/:id', updatePersona)

module.exports = router;