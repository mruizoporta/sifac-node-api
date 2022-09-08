const { Router } = require('express');
const router = Router();
const { createZone, getZones, updateZona, inactivarZona, getZonesbyName } = require('../controllers/zone.controller');

//api/zone/
router.post('/', createZone);
router.get('/:companyid', getZones);
router.get('/name/:name', getZonesbyName);
router.put('/:id', updateZona);
router.put('/inactivar/:id', inactivarZona);

module.exports = router;