const { Person } = require('../models/basic/Person.js');
const { sequelize } = require('../database/database.js');

async function createPerson(req, res) {
    const {
        firstname,
        last_name,
        gender_i_d,
        identification_type,
        identification,
        bsc_city_cityid,
        address,
        birthdate,
        maritalstatusid,
        islegal,
        businessname,
        companyacronym,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        bsc_company_companyid
    } = req.body;

    try {
        let newPerson = await Person.create({
            firstname,
            last_name,
            gender_i_d,
            identification_type,
            identification,
            bsc_city_cityid,
            address,
            birthdate,
            maritalstatusid,
            islegal,
            businessname,
            companyacronym,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            bsc_company_companyid
        });

        if (newPerson) {
            return res.json({
                message: "Persona creada satisfactoriamente.",
                data: newPerson
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar la persona.",
            data: {}
        });

    }
}

async function getPerson(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select * from public.bsc_PersonView WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function getPersonClasification(req, res) {

    const { tipopersona } = req.params;
    try {

        const result = await sequelize.query('select * from public.bsc_PersonViewClasification WHERE tipopersona<>(:vtipopersona) or tipopersona is null', { replacements: { vtipopersona: tipopersona } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function updatePersona(req, res) {
    const { id } = req.params;
    const {
        firstname,
        last_name,
        identification,
        bsc_city_cityid,
        address,
        birthdate,
        islegal,
        businessname,
        companyacronym,
        gender_i_d,
        maritalstatusid,
        identification_type,
        modifiedon,
        modifiedby
    } = req.body;
    try {
        const person = await Person.findAll({
            attributes: ['personid', 'firstname', 'last_name', 'identification', 'bsc_city_cityid', 'address', 'birthdate', 'islegal',
                'businessname', 'companyacronym', 'gender_i_d', 'maritalstatusid', 'identification_type', 'modifiedon', 'modifiedby'
            ],
            where: {
                personid: id
            }
        });

        if (person.length > 0) {
            person.forEach(

                async Person => {
                    await Person.update({
                            firstname,
                            last_name,
                            identification,
                            bsc_city_cityid,
                            address,
                            birthdate,
                            islegal,
                            businessname,
                            companyacronym,
                            gender_i_d,
                            maritalstatusid,
                            identification_type,
                            modifiedon,
                            modifiedby
                        }

                    );
                })
        }

        return res.json({
            message: 'Persona actualizada satisfactoriamente',
            data: Person
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar la persona.",
            data: {}
        });

    }

}
module.exports = {
    createPerson,
    getPerson,
    getPersonClasification,
    updatePersona
}