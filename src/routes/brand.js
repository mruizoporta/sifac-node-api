const { Router } = require('express');

const router = Router();
const { getBrands, createBrand, updateBrand, inactivarBrand } = require('../controllers/brand.controller.js');


//api/brand/
router.post('/', createBrand);
router.get('/:companyid', getBrands);
router.put('/:id', updateBrand)
router.put('/inactivar/:id', inactivarBrand)
module.exports = router;