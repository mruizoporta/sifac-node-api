import { Router } from 'express';

const router = Router();

import { getCategory, createCategory, updateCategory, inactivarCategory } from '../controllers/category.controller.js';



//api/category/
router.post('/', createCategory);
router.get('/:companyid', getCategory);
router.put('/:id', updateCategory)
router.put('/inactivar/:id', inactivarCategory)
module.exports = router;