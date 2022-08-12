import Zone from "../models/basic/zone";

async function createZone(req, res) {
    const {
        name,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        isactive,
        bsc_company_companyid
    } = req.body;

    try {
        let newZone = await Zone.create({
            name,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            isactive,
            bsc_company_companyid
        });

        if (newZone) {
            return res.json({
                message: "Zona creada satisfactoriamente.",
                data: newZone
            });
        }
    } catch (error) {

        res.status(500).json({

            message: error + "Error al registrar la zona.",
            data: {}
        });

    }


}


async function getZones(req, res) {
    const { companyid } = req.params;
    try {
        const zone = await Zone.findAll({

            where: {
                isactive: true,
                bsc_company_companyid: companyid
            }
        });
        res.json(
            zone
        );

    } catch (error) {

        res.status(500).json({
            message: error + "Error al obtener la zona.",
            data: {}
        });
    }
}


async function updateZona(req, res) {
    const { id } = req.params;
    const { name, modifiedon, modifiedby, isactive } = req.body;
    try {
        const brand = await Zone.findAll({
            attributes: ['zoneid', 'name', 'modifiedon', 'modifiedby', 'isactive'],
            where: {
                zoneid: id
            }
        });

        if (brand.length > 0) {
            brand.forEach(

                async Brand => {
                    await Zone.update({
                            name,
                            modifiedon,
                            modifiedby,
                            isactive
                        }

                    );
                })
        }

        return res.json({
            message: 'Zona actualizada satisfactoriamente',
            data: brand
        })

    } catch (error) {

        res.status(500).json({
            message: error + "Error al actualizar la zona.",
            data: {}
        });

    }

}

async function inactivarZona(req, res) {
    const { id } = req.params;
    try {
        const zona = await Zona.findAll({
            attributes: ['brandid'],
            where: {
                zoneid: id
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
            message: 'La Zona se inactivo satisfactoriamente',
            data: brand
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la zona.",
            data: {}
        });

    }

}

module.exports = {
    getZones,
    createZone,
    inactivarZona,
    updateZona
}