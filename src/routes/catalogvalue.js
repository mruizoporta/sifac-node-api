import { Router } from "express";
const router = Router();
import { createCatalogvalue, getCatalogvalue, getCatalogvalueByCatalog } from '../controllers/catalogvalue.controller.js';

//api/catalogvalue/
router.post('/', createCatalogvalue);
router.get('/', getCatalogvalue);
router.get('/:name', getCatalogvalueByCatalog);

module.exports = router;