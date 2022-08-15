const { Router } = require('express');

const router = Router();
const {
    createProductStore,
    addinventoryProduct,
    restinventoryProduct,
    getProductStore,
    getProductStoreOne,
    updatequantityProduct
} = require('../controllers/product.store.controller');

//api/productstore/
router.get('/', getProductStore);
router.get('/one/:id', getProductStoreOne);
router.post('/', createProductStore);

router.put('/:id', updatequantityProduct);
router.put('/aumentar/:id', addinventoryProduct);
router.put('/disminuir/:id', restinventoryProduct);

module.exports = router;