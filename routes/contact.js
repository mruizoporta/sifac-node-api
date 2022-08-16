const { Router } = require('express');

const router = Router();
const { createContact, getOneContactobyPerson, deleteContact, updateContact } = require('../controllers/contact.controller');


//api/contact/
router.post('/', createContact);

// /api/contact/:personid
router.get('/:id', getOneContactobyPerson);
router.delete('/:personid', deleteContact);
router.put('/:id', updateContact);
module.exports = router;