const { Catalogvalue } = require('../models/basic/Catalogvalue.js');

async function createCatalogvalue(req, res) {
    const { code, description, catalogid, createdon, createdby, isactive, reserved } = req.body;
    try {
        const newCatalogvalue = await Catalogvalue.create({
            code,
            description,
            catalogid,
            createdon,
            createdby,
            isactive,
            reserved
        }, {
            fields: ['code', 'description', 'catalogid', 'createdon', 'createdby', 'isactive', 'reserved']
        });

        if (newCatalogvalue) {
            return res.json({
                message: "Valor del catalogo creado satisfactoriamente.",
                data: newCatalogvalue
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el valor del catalogo.",
            data: {}
        });
    }

}

async function getCatalogvalue(req, res) {
    try {
        const catalogvalue = await Catalogvalue.findAll({ attributes: ['catalogvalueid', 'code', 'description', 'catalogid', 'createdon', 'createdby', 'isactive', 'reserved'] });
        res.json({
            data: catalogvalue
        });

    } catch (error) {
        console.log(error);
    }
}

async function updateCatalogvalue(req, re) {
    const { id } = req.params;
    const { code, description, catalogid, createdon, createdby, isactive, reserved } = req.body;
    try {
        const catalogvalue = await Catalogvalue.findAll({
            attributes: ['code', 'description', 'catalogid', 'modifiedon', 'modifiedby', 'isactive', 'reserved'],
            where: {
                catalogvalueid: id
            }
        });

        if (catalogvalue.length > 0) {
            catalogvalue.forEach(

                async Catalogvalue => {
                    await Catalogvalue.update({
                            code,
                            description,
                            catalogid,
                            modifiedon,
                            modifiedby,
                            isactive,
                            reserved
                        }

                    );
                })
        }

        return res.json({
            message: 'Valor del catalogo actualizado satisfactoriamente',
            data: catalogvalue
        })

    } catch (error) {
        console.log(error);

    }
}

function deleteCatalogvalue(req, re) {
    const { id } = req.params;
    try {
        const deleteRowCount = Catalogvalue.destroy({
            where: {
                catalogvalueid: id
            }
        });
        res.json({
            message: "Valor del catalogo eliminado satisfactoriamente.",
            count: deleteRowCount
        })
    } catch (error) {
        console.log(error);
    }
}

async function getOneCatalogvalue(req, re) {
    const { id } = req.params;

    try {
        const catalogvalue = await Catalogvalue.findOne({
            where: {
                catalogvalueid: id
            }
        });
        res.json({
            data: catalogvalue
        })
    } catch (error) {
        console.log(error);
    }
}

async function getCatalogvalueByCatalog(req, res) {
    const { name } = req.params;
    try {

        await Catalogvalue.sequelize.query('SELECT * FROM public.bsc_GetCatalogValues (:vname)', { replacements: { vname: name, } }, { type: Catalogvalue.sequelize.QueryTypes.SELECT })
            .then(function(catalogvalue) {
                res.json(catalogvalue[0])
            });
        // .error(function(err) {
        //     res.json(err);
        // });

    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener los catalogos.",
            data: {}
        });
    }
}

module.exports = {
    createCatalogvalue,
    getCatalogvalue,
    updateCatalogvalue,
    deleteCatalogvalue,
    getOneCatalogvalue,
    getCatalogvalueByCatalog
}