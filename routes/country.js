const { Router } = require('express');
const router = Router();
const { getCountrybyCode, getCountry, getOneCountry } = require('../controllers/country.controller');

//api/country/
router.get('/', getCountry);
router.get('/:id', getOneCountry);
router.get('/getCountrybyCode/:code', getCountrybyCode);

module.exports = router;