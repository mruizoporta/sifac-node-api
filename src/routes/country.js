import { Router } from "express";

const router = Router();

import { getCountrybyCode, getCountry, getOneCountry } from '../controllers/country.controller.js';

//api/country/
router.get('/', getCountry);
router.get('/:id', getOneCountry);
router.get('/getCountrybyCode/:code', getCountrybyCode);

module.exports = router;