const { Router } = require('express');
const router = Router();
const { createZone, getZones, updateZona, inactivarZona } = require('../controllers/zone.controller');

//api/zone/
router.post('/', createZone);
router.get('/:companyid', getZones);
router.put('/:id', updateZona);
router.put('/inactivar/:id', inactivarZona);

module.exports = router;