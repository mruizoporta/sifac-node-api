const City = require('../models/basic/City.js');

async function getCity(req, res) {
    try {
        const city = await City.findAll({
            order: [
                ['name', 'ASC']
            ]
        });
        res.json({
            data: city
        })
    } catch (error) {
        console.log(error);
    }
}

async function getOneCity(req, res) {
    const { id } = req.params;
    try {
        const city = await City.findOne({
            where: {
                cityid: id
            },
            order: [
                ['name', 'ASC']
            ]
        });
        res.json({
            data: city
        })
    } catch (error) {
        console.log(error);
    }
}

async function getCitybyCountry(req, res) {
    const { countryid } = req.params;
    try {
        const city = await City.findAll({
            where: {
                country_countryid: countryid
            },
            order: [
                ['name', 'ASC']
            ]
        });
        res.json(
            city
        )
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCity,
    getOneCity,
    getCitybyCountry
}