const { response, default: e } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
const { Category } = require('../models/inventory/Category.js');

async function createCategory(req, res) {
    const { name, description, createdon, createdby, modifiedon, modifiedby, isactive, bsc_company_companyid } = req.body;

    try {
        let newCategory = await Category.create({
            name,
            description,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            bsc_company_companyid
        });

        if (newCategory) {
            return res.json({
                message: "Categoria creada satisfactoriamente.",
                data: newCategory
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar la categoria.",
            data: {}
        });

    }
}

async function getCategory(req, res) {
    const { companyid } = req.params;
    try {
        const category = await Category.findAll({
            order: [
                ["name", "ASC"]
            ],
            where: {
                isactive: true,
                bsc_company_companyid: companyid
            }
        });
        res.json(
            category
        );

    } catch (error) {

        res.status(500).json({
            message: error + "Error al obtener las categoria.",
            data: {}
        });
    }
}

async function updateCategory(req, res) {
    const { id } = req.params;
    const { name, description, modifiedon, modifiedby, isactive } = req.body;
    try {
        const category = await Category.findAll({
            attributes: ['categoryid', 'name', 'description', 'modifiedon', 'modifiedby', 'isactive'],
            where: {
                categoryid: id
            }
        });

        if (category.length > 0) {
            category.forEach(

                async Category => {
                    await Category.update({
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
            message: 'Categoria actualizada satisfactoriamente',
            data: category
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la categoria.",
            data: {}
        });

    }

}

async function inactivarCategory(req, res) {
    const { id } = req.params;
    try {
        const category = await Category.findAll({
            attributes: ['categoryid'],
            where: {
                categoryid: id
            }
        });

        if (category.length > 0) {
            category.forEach(
                async Category => {
                    await Category.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'La categoria se inactivo satisfactoriamente',
            data: category
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la categoria.",
            data: {}
        });

    }

}

async function getOneCategory(req, res) {
    const { id } = req.params;

    try {
        const category = await Category.findOne({
            where: {
                categoryid: id
            }
        });
        res.json({
            data: category
        })
    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener la categoria.",
            data: {}
        });
    }
}


async function getCategorybyName(req, res) {
    const { name } = req.params;
    try {

        await Category.sequelize.query('SELECT *  FROM public.bsc_getcategoryyname(:vname)', { replacements: { vname: name, } }, { type: Category.sequelize.QueryTypes.SELECT })
            .then(function(category) {
                res.json(category[0])
            });

    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener las zonas.",
            data: {}
        });
    }
}

module.exports = {
    getCategory,
    createCategory,
    updateCategory,
    getOneCategory,
    inactivarCategory,
    getCategorybyName

}