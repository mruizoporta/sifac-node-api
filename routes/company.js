const { Router } = require('express');

const router = Router();
const { getCompany } = require('../controllers/company.controller.js');

//api/company/
router.get('/', getCompany);

module.exports = router;