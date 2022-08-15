const Catalog = require('../models/basic/Catalog.js');

async function createCatalog(req, res) {
    const { name, description, createdon, createdby, modifiedon, modifiedby, isactive } = req.body;

    try {
        let newCatalog = await Catalog.create({
            name,
            description,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive
        });

        if (newCatalog) {
            return res.json({
                message: "Catalogo creado satisfactoriamente.",
                data: newCatalog
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el catalogo.",
            data: {}
        });

    }
}

async function getCatalog(req, res) {
    try {
        const catalog = await Catalog.findAll();
        res.json({
            data: catalog
        });

    } catch (error) {
        console.log(error);
    }
}

async function getOneCatalog(req, res) {
    const { id } = req.params;

    try {
        const catalog = await Catalog.findOne({
            where: {
                catalogid: id
            }
        });
        res.json({
            data: catalog
        })
    } catch (error) {
        console.log(error);
    }
}

async function deleteCatalog(req, res) {
    const { id } = req.params;
    try {
        const deleteRowCount = Catalog.destroy({
            where: {
                catalogid: id
            }
        });
        res.json({
            message: "Catalogo eliminado satisfactoriamente.",
            count: deleteRowCount
        })
    } catch (error) {
        console.log(error);
    }

}

async function updateCatalog(req, res) {
    const { id } = req.params;
    const { name, description, modifiedon, modifiedby, isactive } = req.body;
    try {
        const catalog = await Catalog.findAll({
            attributes: ['catalogid', 'name', 'description', 'modifiedon', 'modifiedby', 'isactive'],
            where: {
                catalogid: id
            }
        });

        if (catalog.length > 0) {
            catalog.forEach(

                async Catalog => {
                    await Catalog.update({
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
            message: 'Catalogo actualizado satisfactoriamente',
            data: catalog
        })

    } catch (error) {
        console.log(error);

    }

}
module.exports = {
    createCatalog,
    getCatalog,
    getOneCatalog,
    deleteCatalog,
    updateCatalog,
    updateCatalog
}