const { Router } = require('express');
const router = Router();
const { createCatalogvalue, getCatalogvalue, getCatalogvalueByCatalog } = require('../controllers/catalogvalue.controller.js');

//api/catalogvalue/
router.post('/', createCatalogvalue);
router.get('/', getCatalogvalue);
router.get('/:name', getCatalogvalueByCatalog);

module.exports = router;