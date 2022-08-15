const Store = require('../models/inventory/Store.js');
const { sequelize } = require('../database/database.js');

async function createStore(req, res) {
    const {
        name,
        code,
        bsc_city_cityid,
        managerid,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        isactive,
        bsc_company_companyid
    } = req.body;

    try {
        let newStore = await Store.create({
            name,
            code,
            bsc_city_cityid,
            managerid,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            bsc_company_companyid
        });

        if (newStore) {
            return res.json({
                message: "Bodega creada satisfactoriamente.",
                data: newStore
            });
        }
    } catch (error) {

        res.status(500).json({

            message: error + "Error al registrar la bodega.",
            data: {}
        });

    }
}

async function getStore(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select * from public.inv_storeview WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function updateStore(req, res) {
    const { id } = req.params;
    const { name, code, bsc_city_cityid, managerid, modifiedon, modifiedby, isactive } = req.body;
    try {
        const store = await Store.findAll({
            attributes: ['storeid', 'name', 'code', 'bsc_city_cityid', 'managerid', 'modifiedon', 'modifiedby', 'isactive'],
            where: {
                storeid: id
            }
        });

        if (store.length > 0) {
            store.forEach(

                async Store => {
                    await Store.update({
                            name,
                            code,
                            bsc_city_cityid,
                            managerid,
                            modifiedon,
                            modifiedby

                        }

                    );
                })
        }

        return res.json({
            message: 'Bodega actualizada satisfactoriamente',
            data: store
        })

    } catch (error) {

        res.status(500).json({
            message: error + "Error al actualizar la bodega.",
            data: {}
        });

    }

}

async function inactivarStore(req, res) {
    const { id } = req.params;
    try {
        const store = await Store.findAll({
            attributes: ['storeid'],
            where: {
                storeid: id
            }
        });

        if (store.length > 0) {
            store.forEach(
                async Store => {
                    await Store.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'La Bodega se inactivo satisfactoriamente',
            data: store
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la marca.",
            data: {}
        });

    }

}

async function getOneStore(req, res) {
    const { id } = req.params;

    try {
        const store = await Store.findOne({
            where: {
                storeid: id
            }
        });
        res.json({
            data: store
        })
    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener la bodega.",
            data: {}
        });
    }
}


module.exports = {
    createStore,
    getStore,
    updateStore,
    inactivarStore,
    getOneStore

}