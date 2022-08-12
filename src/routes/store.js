import { Router } from 'express';

const router = Router();
import { createStore, getStore, getOneStore, updateStore, inactivarStore } from '../controllers/store.controller';


//api/store/
router.post('/', createStore);
router.get('/:companyid', getStore);
router.get('/onestore/:id', getOneStore);
router.put('/:id', updateStore)
router.put('/inactivar/:id', inactivarStore)

module.exports = router;