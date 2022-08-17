const { Router } = require('express');

const router = Router();
const { getOneRoutes, createRoutes, getRoutes, updateRoutes, inactivarRoutes, getRoutesPropias } = require('../controllers/routes.controller');

//api/route/
router.post('/', createRoutes);
router.get('/:companyid', getRoutes);
router.get('/pro/:companyid/:id', getRoutesPropias)
router.get('/oneroutes/:id', getOneRoutes);
router.put('/:id', updateRoutes)
router.put('/inactivar/:id', inactivarRoutes)

module.exports = router;