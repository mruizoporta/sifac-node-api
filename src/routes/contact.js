import { Router } from 'express';


const router = Router();
import { createContact } from '../controllers/contact.controller';


//api/contact/
router.post('/', createContact);

module.exports = router;