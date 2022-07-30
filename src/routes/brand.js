import { Router } from 'express';


const router = Router();
import { getBrands, createBrand, updateBrand, inactivarBrand } from '../controllers/brand.controller.js';


//api/brand/
router.post('/', createBrand);
router.get('/:companyid', getBrands);
router.put('/:id', updateBrand)
router.put('/inactivar/:id', inactivarBrand)
module.exports = router;