import { Router } from 'express';

const router = Router();
import { createProduct, getProduct, updateProduct, inactivarProduct, getOneProduct, getProductStore } from '../controllers/product.controller';


//api/product/
router.post('/', createProduct);
router.get('/:companyid', getProduct);
router.get('/oneproduct/:id', getOneProduct);
router.put('/:id', updateProduct)
router.put('/inactivar/:id', inactivarProduct)
router.get('/store/:id', getProductStore);
module.exports = router;