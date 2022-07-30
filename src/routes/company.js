import { Router } from 'express';

const router = Router();

import { getCompany } from '../controllers/company.controller.js';

//api/company/
router.get('/', getCompany);

module.exports = router;