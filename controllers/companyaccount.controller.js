const { response, default: e } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const { CompanyAccount } = require('../models/basic/CompanyAccount.js');
const { Company } = require('../models/basic/Company.js');
const { City } = require('../models/basic/City.js');
const { sequelize } = require('../database/database.js');

async function getCompanybyAccount(req, res) {
    const { accountid } = req.params;
    try {
        const result = await sequelize.query('select * from public.sec_companyaccountview WHERE sec_account_accountid= (:vaccountid)', { replacements: { vaccountid: accountid, } });
        res.json(result[0]);

    } catch (error) {

        console.log(error);
    }
}

module.exports = {
    getCompanybyAccount

}