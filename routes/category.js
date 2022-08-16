const { Router } = require('express');
const router = Router();

const { getCategory, createCategory, updateCategory, inactivarCategory } = require('../controllers/category.controller.js');

//api/category/
router.post('/', createCategory);
router.get('/:companyid', getCategory);
router.put('/:id', updateCategory)
router.put('/inactivar/:id', inactivarCategory)
module.exports = router;