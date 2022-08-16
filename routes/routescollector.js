const { Router } = require('express');

const router = Router();
const { getOneRoutes, createRoutes, getRoutes, updateRoutes, inactivarRoutes } = require('../controllers/routes.controller');

//api/route/
router.post('/', createRoutes);
router.get('/:companyid', getRoutes);
router.get('/oneroutes/:id', getOneRoutes);
router.put('/:id', updateRoutes)
router.put('/inactivar/:id', inactivarRoutes)

module.exports = router;