const { Router } = require('express');

const router = Router();
const { createProduct, getProduct, updateProduct, inactivarProduct, getOneProduct, getProductStore } = require('../controllers/product.controller');

//api/product/
router.post('/', createProduct);
router.get('/:companyid', getProduct);
router.get('/oneproduct/:id', getOneProduct);
router.put('/:id', updateProduct)
router.put('/inactivar/:id', inactivarProduct)
router.get('/store/:id', getProductStore);
module.exports = router;