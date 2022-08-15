const { Router } = require('express');
const router = Router();
const { getCompanybyAccount } = require('../controllers/companyaccount.controller.js');

//api/companyaccount/
router.get('/:accountid', getCompanybyAccount);


module.exports = router;