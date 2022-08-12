import { Router } from 'express';


const router = Router();
import { createContact, getOneContactobyPerson, deleteContact, updateContact } from '../controllers/contact.controller';


//api/contact/
router.post('/', createContact);

// /api/contact/:personid
router.get('/:id', getOneContactobyPerson);
router.delete('/:personid', deleteContact);
router.put('/:id', updateContact);
module.exports = router;