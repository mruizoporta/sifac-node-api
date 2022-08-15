const { response, default: e } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const CompanyAccount = require('../models/basic/CompanyAccount.js');
const Company = require('../models/basic/Company.js');
const City = require('../models/basic/City.js');

async function getCompanybyAccount(req, res) {
    const { accountid } = req.params;
    try {
        //if (accountid != null) {
        const companyaccount = await CompanyAccount.findAll({
            where: {
                sec_account_accountid: accountid,
                isActive: true
            },
            attributes: ['companyaccountid', 'sec_account_accountid', 'bsc_company_companyid'],
            include: {
                model: Company,
                attributes: ['companyid', 'name', 'location'],
                include: { model: City, attributes: ['name'] }
            }
        });
        // } else {
        //     res.json(
        //         "No hay datos"
        //     )
        // }
        res.json(
            companyaccount
        );

    } catch (error) {

        console.log(error);
    }
}

module.exports = {
    getCompanybyAccount

}