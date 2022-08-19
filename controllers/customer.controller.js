const { Customer } = require("../models/account/Customer");
const { Person } = require("../models/basic/Person");
const { sequelize } = require('../database/database.js');
const { Contact } = require('../controllers/contact.controller');
const { CatalogoValue } = require('../controllers/catalogvalue.controller');

async function getCustomer(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select * from public.bsc_EmployeeView WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function getOneCustomer(req, res) {
    const { id } = req.params;

    try {

        const result = await sequelize.query('select * from public.bsc_EmployeeView WHERE employeesid= (:vemployeesid)', { replacements: { vemployeesid: id, } });

        res.json(result[0][0]);

    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener el empleado.",
            data: {}
        });
    }
}

async function createCustomer(req, res) {
    const {
        personid,
        isactive,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        bsc_company_companyid
    } = req.body;

    try {
        let newCustomer = await Employees.create({
            personid,
            isactive,
            datestarted,
            dateended,
            positionid,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            bsc_company_companyid
        });

        if (newCustomer) {
            return res.json({
                message: "Cliente creado satisfactoriamente.",
                data: newCustomer
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el cliente.",
            data: {}
        });

    }
}

async function createCustomerWithPerson(req, res) {
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

        isactive,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        bsc_company_companyid,
        email,
        telefono

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
        })
        if (newPerson) {
            //procedemos a guardar el contacto de la persona
            //1.Telefono
            //Buscamos el codigo del catalogo para telefono
            if (telefono.length > 0) {
                let catalogoTelefono = await CatalogoValue.getCatalogvalueByCatalogandCode({
                    name: 'TIPOCONTACTO',
                    code: '03'
                });

                let newPContacttelefono = await Contact.createcontact(
                    newPerson.personid,
                    catalogoTelefono.catalogvalueid,
                    telefono,
                    createdon,
                    createdby,
                    modifiedon,
                    modifiedby

                )
            }
            //2. Email   
            //Buscamos el codigo del catalogo para email
            if (email.length > 0) {
                let catalogoEmail = await CatalogoValue.getCatalogvalueByCatalogandCode({
                    name: 'TIPOCONTACTO',
                    code: '04'
                });

                let newPContactemail = await Contact.createcontact(
                    newPerson.personid,
                    catalogoEmail.catalogvalueid,
                    email,
                    createdon,
                    createdby,
                    modifiedon,
                    modifiedby

                )
            }
            let newCustomer = await Customer.create({
                personid: newPerson.dataValues.personid,
                isactive,
                createdon,
                createdby,
                modifiedon,
                modifiedby,
                bsc_company_companyid
            });

            if (newCustomer) {
                return res.json({
                    message: "Cliente creada satisfactoriamente.",
                    data: newCustomer
                });
            }

        }

    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el empleado.",
            data: {}
        });

    }
}

async function inactivarCliente(req, res) {
    const { id } = req.params;
    try {
        const customer = await Customer.findAll({
            attributes: ['customerid'],
            where: {
                customerid: id
            }
        });
        if (customer.length > 0) {
            customer.forEach(
                async Customer => {
                    await Customer.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'El cliente se inactivo satisfactoriamente',
            data: customer
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el empleado.",
            data: {}
        });

    }

}

async function updateCustomer(req, res) {
    const { id } = req.params;
    const {
        firstname,
        last_name,
        gender_i_d,
        identificationType,
        identification,
        bsc_city_cityid,
        address,
        birthdate,
        maritalstatusid,
        islegal,
        businessname,
        companyacronym,
        email,
        telefono,
        modifiedon,
        modifiedby
    } = req.body;

    //console.log(req.body);
    try {
        const customer = await Customer.findAll({
            attributes: ['customerid', 'personid', 'modifiedon', 'modifiedby', 'bsc_company_companyid', 'email', 'telefono'],
            where: {
                customerid: id
            }
        });

        if (customer.length > 0) {
            customer.forEach(

                async Customer => {
                    await Customer.update({
                            modifiedon,
                            modifiedby
                        }

                    );
                })

            //Actuailizar persona 
            //  console.log(employee[0].dataValues.personid);
            const person = await Person.findAll({
                attributes: ['personid', 'firstname', 'last_name', 'identification', 'bsc_city_cityid', 'address', 'birthdate', 'islegal',
                    'businessname', 'companyacronym', 'gender_i_d', 'maritalstatusid', 'identification_type', 'modifiedon', 'modifiedby'
                ],
                where: {
                    personid: customer[0].dataValues.personid
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
                                identification_type: identificationType,
                                modifiedon,
                                modifiedby
                            }

                        );
                    })

                //Eliminamos los contactos
                Contact.deleteContact({ personid: customer[0].dataValues.personid });

                //procedemos a guardar el contacto de la persona
                //1.Telefono
                //Buscamos el codigo del catalogo para telefono
                if (telefono.length > 0) {
                    let catalogoTelefono = await CatalogoValue.getCatalogvalueByCatalogandCode({
                        name: 'TIPOCONTACTO',
                        code: '03'
                    });

                    let newPContacttelefono = await Contact.createcontact(
                        newPerson.personid,
                        catalogoTelefono.catalogvalueid,
                        telefono,
                        createdon,
                        createdby,
                        modifiedon,
                        modifiedby

                    )
                }
                //2. Email   
                //Buscamos el codigo del catalogo para email
                if (email.length > 0) {
                    let catalogoEmail = await CatalogoValue.getCatalogvalueByCatalogandCode({
                        name: 'TIPOCONTACTO',
                        code: '04'
                    });

                    let newPContactemail = await Contact.createcontact(
                        newPerson.personid,
                        catalogoEmail.catalogvalueid,
                        email,
                        createdon,
                        createdby,
                        modifiedon,
                        modifiedby

                    )
                }

            }

        }




        return res.json({
            message: 'Cliente actualizada satisfactoriamente',
            data: Employees
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el empleado.",
            data: {}
        });

    }
}

module.exports = {
    getCustomer,
    createCustomer,
    createCustomerWithPerson,
    inactivarCliente,
    updateCustomer,
    getOneCustomer
}