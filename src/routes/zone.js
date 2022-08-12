import { Router } from 'express';


const router = Router();
import { getZones, createZone, inactivarZona, updateZona } from '../controllers/zone.controller';


//api/zone/
router.post('/', createZone);
router.get('/:companyid', getZones);
router.put('/:id', updateZona);
router.put('/inactivar/:id', inactivarZona);
module.exports = router;