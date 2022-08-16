const { Router } = require('express');

const router = Router();
const { createPerson, getPerson, getPersonClasification, updatePersona } = require('../controllers/person.controller.js');

//api/person/
router.post('/', createPerson);
router.get('/:companyid', getPerson)
router.get('/cal/:tipopersona', getPersonClasification)
router.put('/:id', updatePersona)

module.exports = router;