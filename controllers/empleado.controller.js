const { Employees } = require("../models/basic/Employees");
const { Person } = require("../models/basic/Person");
const { sequelize } = require('../database/database.js');

async function getEmpleado(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select * from public.bsc_EmployeeView WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function getEmpleadoByCombos(req, res) {
    const { companyid } = req.params;
    try {

        const result = await sequelize.query('select employeesid, nameemployee from public.bsc_EmployeeView WHERE bsc_company_companyid= (:vcompanyid)', { replacements: { vcompanyid: companyid, } });
        res.json(result[0]);
    } catch (error) {

        console.log(error);
    }
}

async function getOneEmployee(req, res) {
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

async function createEmpleado(req, res) {
    const {
        personid,
        isactive,
        datestarted,
        dateended,
        positionid,
        createdon,
        createdby,
        modifiedon,
        modifiedby,
        bsc_company_companyid,
        email,
        telefono
    } = req.body;

    try {
        let newEmployee = await Employees.create({
            personid,
            isactive,
            datestarted,
            dateended,
            positionid,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            bsc_company_companyid,
            email,
            telefono
        });

        if (newEmployee) {
            return res.json({
                message: "Empleado creada satisfactoriamente.",
                data: newEmployee
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el empleado.",
            data: {}
        });

    }
}

async function createEmpleadoWithPerson(req, res) {
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
        datestarted,
        dateended,
        positionid,
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

        let newEmployee = await Employees.create({
            personid: newPerson.dataValues.personid,
            isactive,
            datestarted,
            dateended,
            positionid,
            createdon,
            createdby,
            modifiedon,
            modifiedby,
            bsc_company_companyid,
            email,
            telefono
        });

        if (newEmployee) {
            return res.json({
                message: "Empleado creada satisfactoriamente.",
                data: newEmployee
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error + "Error al registrar el empleado.",
            data: {}
        });

    }
}

async function inactivarEmployee(req, res) {
    const { id } = req.params;
    try {
        const employee = await Employees.findAll({
            attributes: ['employeesid'],
            where: {
                employeesid: id
            }
        });
        if (employee.length > 0) {
            employee.forEach(
                async Employees => {
                    await Employees.update({
                        isactive: false
                    });
                })
        }

        return res.json({
            message: 'El empleado se inactivo satisfactoriamente',
            data: employee
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el empleado.",
            data: {}
        });

    }

}

async function updateEmployee(req, res) {
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

        datestarted,
        dateended,
        positionid,
        modifiedon,
        modifiedby
    } = req.body;

    //console.log(req.body);
    try {
        const employee = await Employees.findAll({
            attributes: ['employeesid', 'personid', 'datestarted', 'dateended', 'positionid', 'modifiedon', 'modifiedby',
                'bsc_company_companyid', 'email', 'telefono'
            ],
            where: {
                employeesid: id
            }
        });

        if (employee.length > 0) {
            employee.forEach(

                async Employees => {
                    await Employees.update({
                            datestarted,
                            dateended,
                            positionid,
                            email,
                            telefono,
                            modifiedon,
                            modifiedby
                        }

                    );
                })
        }

        //Actuailizar persona 
        //  console.log(employee[0].dataValues.personid);
        const person = await Person.findAll({
            attributes: ['personid', 'firstname', 'last_name', 'identification', 'bsc_city_cityid', 'address', 'birthdate', 'islegal',
                'businessname', 'companyacronym', 'gender_i_d', 'maritalstatusid', 'identification_type', 'modifiedon', 'modifiedby'
            ],
            where: {
                personid: employee[0].dataValues.personid
            }
        });
        //console.log('person');
        //console.log(person);
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
        }

        return res.json({
            message: 'Empleado actualizada satisfactoriamente',
            data: Employees
        })

    } catch (error) {
        res.status(500).json({
            message: error + "Error al actualizar el empleado.",
            data: {}
        });

    }
}


async function getEmployeebyIdentification(req, res) {
    const { name } = req.params;
    try {

        await Employees.sequelize.query('SELECT * FROM public.bsc_getemployeebyidentificacion (:vname)', { replacements: { vname: name, } }, { type: Employees.sequelize.QueryTypes.SELECT })
            .then(function(employee) {
                res.json(employee[0])
            });

    } catch (error) {
        res.status(500).json({
            message: error + "Error al obtener los productos.",
            data: {}
        });
    }
}

module.exports = {
    getEmpleado,
    getEmpleadoByCombos,
    createEmpleado,
    createEmpleadoWithPerson,
    inactivarEmployee,
    updateEmployee,
    getOneEmployee,
    getEmployeebyIdentification
}