import { Router } from 'express';

const router = Router();
import { getOneRoutes, createRoutes, getRoutes, updateRoutes, inactivarRoutes } from '../controllers/routes.controller';


//api/route/
router.post('/', createRoutes);
router.get('/:companyid', getRoutes);
router.get('/oneroutes/:id', getOneRoutes);
router.put('/:id', updateRoutes)
router.put('/inactivar/:id', inactivarRoutes)

module.exports = router;