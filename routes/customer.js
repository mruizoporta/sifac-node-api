const { Router } = require('express');

const router = Router();
const { createCustomer, createCustomerWithPerson, getCustomer, updateCustomer, getOneCustomer, inactivarCliente } = require('../controllers/customer.controller');

//api/customer/
router.post('/', createCustomer);
router.post('/persona/', createCustomerWithPerson);

// /api/customer/:customerid
router.get('/:companyid', getCustomer);
router.get('/one/:id', getOneCustomer)
router.put('/:id', updateCustomer);
router.put('/inactivar/:id', inactivarCliente)

module.exports = router;