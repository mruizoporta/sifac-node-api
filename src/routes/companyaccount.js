import { Router } from 'express';

const router = Router();

import { getCompanybyAccount } from '../controllers/companyaccount.controller.js';

//api/companyaccount/
router.get('/:accountid', getCompanybyAccount);


module.exports = router;