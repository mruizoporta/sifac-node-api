const { Router } = require('express');
const router = Router();

const { createCatalog, getCatalog, getOneCatalog, deleteCatalog, updateCatalog } = require('../controllers/catalog.controller.js');
//api/catalog/
router.post('/', createCatalog);
router.get('/', getCatalog);

// /api/catalog/:catalogid
router.get('/:id', getOneCatalog);
router.delete('/:id', deleteCatalog);
router.put('/:id', updateCatalog);

module.exports = router;