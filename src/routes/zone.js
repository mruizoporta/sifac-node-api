const { Router } = require('express');
const router = Router();
const { getZones, createZone, inactivarZona, updateZona } = require('../controllers/zone.controller');

//api/zone/
router.post('/', createZone);
router.get('/:companyid', getZones);
router.put('/:id', updateZona);
router.put('/inactivar/:id', inactivarZona);
module.exports = router;