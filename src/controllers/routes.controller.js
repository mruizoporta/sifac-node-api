const Routes = require("../models/basic/RoutesCollector");
const { sequelize } = require('../database/database.js');

async function createRoutes(req, res) {
    const {
        name,
        code,
        day,
        bsc_city_cityid,
        collectorid,
        supervisorid,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        isactive,
        bsc_company_companyid,
        zoneid,
        secretariaid
    } = req.body;

    try {
        let newRoute = await Routes.create({
            name,
            code,
            day,
            bsc_city_cityid,
            collectorid,
            supervisorid,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            bsc_company_companyid,
            zoneid,
            secretariaid
        });

        if (newRoute) {

            var values = {
                code: "RUT0" + newRoute.dataValues.routeid
            };
            var selector = {
                where: {
                    routeid: newRoute.dataValues.routeid
                }
            };
            await Routes.update(values, selector);

            return res.json({
                message: "Ruta creada satisfactoriamente.",
                data: newRoute
            });
        }
    } catch (error) {

        res.status(500).json({

            message: error + "Error al registrar la ruta.",
            data: {}
        });

    }
}

async function getRoutes(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select * from public.bsc_RoutesView WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function updateRoutes(req, res) {
    const { id } = req.params;
    const { name, code, day, bsc_city_cityid, collectorid, supervisorid, secretariaid, zoneid, modifiedon, modifiedby } = req.body;
    try {
        const routes = await Routes.findAll({
            attributes: ['routeid', 'name', 'code', 'day', 'bsc_city_cityid', 'collectorid', 'supervisorid', 'secretariaid', 'zoneid', 'modifiedon', 'modifiedby', 'isactive'],
            where: {
                routeid: id
            }
        });

        if (routes.length > 0) {
            routes.forEach(
                async Routes => {
                    await Routes.update({
                            name,
                            code,
                            day,
                            bsc_city_cityid,
                            collectorid,
                            supervisorid,
                            secretariaid,
                            zoneid,
                            modifiedon,
                            modifiedby
                        }

                    );
                })
        }

        return res.json({
            message: 'Ruta actualizada satisfactoriamente',
            data: routes
        })

    } catch (error) {

        res.status(500).json({
            message: error + "Error al actualizar la marca.",
            data: {}
        });

    }

}

async function inactivarRoutes(req, res) {
    const { id } = req.params;
    try {
        const routes = await Routes.findAll({
            attributes: ['routeid'],
            where: {
                routeid: id
            }
        });

        if (routes.length > 0) {
            routes.forEach(
                async Routes => {
                    await Routes.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'La Ruta se inactivo satisfactoriamente',
            data: routes
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la ruta.",
            data: {}
        });

    }

}

async function getOneRoutes(req, res) {
    const { id } = req.params;

    try {
        const routes = await Routes.findOne({
            where: {
                routeid: id
            }
        });
        res.json(routes)
    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener la marca.",
            data: {}
        });
    }
}

module.exports = {
    getOneRoutes,
    createRoutes,
    getRoutes,
    updateRoutes,
    inactivarRoutes
}