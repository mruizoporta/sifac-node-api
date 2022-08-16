const { Router } = require('express');
const router = Router();
const { getCity, getOneCity, getCitybyCountry } = require('../controllers/city.controller.js');

//api/city/
router.get('/', getCity);
router.get('/:id', getOneCity);
router.get('/getCitybyCountry/:countryid', getCitybyCountry);

module.exports = router;