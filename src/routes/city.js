import { Router } from 'express';

const router = Router();

import { getCity, getOneCity, getCitybyCountry } from '../controllers/city.controller.js';

//api/city/
router.get('/', getCity);
router.get('/:id', getOneCity);
router.get('/getCitybyCountry/:countryid', getCitybyCountry);

module.exports = router;