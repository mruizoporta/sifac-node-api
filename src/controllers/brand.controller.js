const { response, default: e } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const Brand = require('../models/basic/Brands.js');

async function createBrand(req, res) {
    const { name, description, createdon, createdby, modifiedon, modifiedby, isactive, bsc_company_companyid } = req.body;

    try {
        let newBrand = await Brand.create({
            name,
            description,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            bsc_company_companyid
        });

        if (newBrand) {
            return res.json({
                message: "Marca creada satisfactoriamente.",
                data: newBrand
            });
        }
    } catch (error) {

        res.status(500).json({

            message: error + "Error al registrar la marca.",
            data: {}
        });

    }
}

async function getBrands(req, res) {
    const { companyid } = req.params;
    try {
        const brand = await Brand.findAll({
            order: [
                ["name", "ASC"]
            ],
            where: {
                isactive: true,
                bsc_company_companyid: companyid
            }
        });
        res.json(
            brand
        );

    } catch (error) {

        res.status(500).json({
            message: error + "Error al obtener la marca.",
            data: {}
        });
    }
}

async function updateBrand(req, res) {
    const { id } = req.params;
    const { name, description, modifiedon, modifiedby, isactive } = req.body;
    try {
        const brand = await Brand.findAll({
            attributes: ['brandid', 'name', 'description', 'modifiedon', 'modifiedby', 'isactive'],
            where: {
                brandid: id
            }
        });

        if (brand.length > 0) {
            brand.forEach(

                async Brand => {
                    await Brand.update({
                            name,
                            description,
                            modifiedon,
                            modifiedby,
                            isactive
                        }

                    );
                })
        }

        return res.json({
            message: 'Marca actualizada satisfactoriamente',
            data: brand
        })

    } catch (error) {

        res.status(500).json({
            message: error + "Error al actualizar la marca.",
            data: {}
        });

    }

}

async function inactivarBrand(req, res) {
    const { id } = req.params;
    try {
        const brand = await Brand.findAll({
            attributes: ['brandid'],
            where: {
                brandid: id
            }
        });

        if (brand.length > 0) {
            brand.forEach(
                async Brand => {
                    await Brand.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'La Marca se inactivo satisfactoriamente',
            data: brand
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la marca.",
            data: {}
        });

    }

}

async function getOneBrand(req, res) {
    const { id } = req.params;

    try {
        const brand = await Brand.findOne({
            where: {
                brandid: id
            }
        });
        res.json({
            data: brand
        })
    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener la marca.",
            data: {}
        });
    }
}

module.exports = {
    getBrands,
    createBrand,
    updateBrand,
    getOneBrand,
    inactivarBrand

}