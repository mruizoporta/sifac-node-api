const { response, default: e } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const Company = require('../models/basic/Company.js');


async function getCompany(req, res) {
    try {
        const account = await Company.findAll();
        res.json({
            data: account
        });

    } catch (error) {

        console.log(error);
    }
}

// const getCompanybyAccount = async(req, res = response) => {

//     const { id } = req.params;
//     const company = await Company.findById(id)
//         .populate('usuario', 'nombre')
//         .populate('categoria', 'nombre');

//     res.json(producto);

// }

// async function getCompanybyAccount(req, res) {
//     try {
//         const account = sequelize
//             .query('CALL login (:email, :pwd, :device)', { replacements: { email: "me@jsbot.io", pwd: 'pwd', device: 'Android', } })
//             .then(v => console.log(v));

//         res.json({
//             data: account
//         });
//     } catch (error) {

//         console.log(error);
//     }
// }
module.exports = {
    getCompany

}