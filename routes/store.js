const { Router } = require('express');
const router = Router();
const { createStore, getStore, getOneStore, updateStore, inactivarStore } = require('../controllers/store.controller');

//api/store/
router.post('/', createStore);
router.get('/:companyid', getStore);
router.get('/onestore/:id', getOneStore);
router.put('/:id', updateStore)
router.put('/inactivar/:id', inactivarStore)

module.exports = router;