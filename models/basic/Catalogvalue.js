const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Contact = require('./Contact');
const Person = require('./Person');
const Employee = require('./Employees');

const Catalogvalue = sequelize.define('bsc_catalogvalues', {

    catalogvalueid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    catalog_catalogid: {
        type: Sequelize.INTEGER
    },

    createdon: {
        type: Sequelize.DATE
    },
    createdby: {
        type: Sequelize.STRING
    },
    modifiedon: {
        type: Sequelize.DATE
    },
    modifiedby: {
        type: Sequelize.STRING
    },
    isactive: {
        type: Sequelize.BOOLEAN
    },
    reserved: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

// Catalogvalue.hasMany(Company, { foreingKey: 'statusid', soourceKey: 'catalogvalueid' });
// Company.belongsTo(Catalogvalue, { foreignKey: 'statusid', soourceKey: 'catalogvalueid' });

//Person
// Catalogvalue.hasMany(Person, { as: 'gender', foreingKey: 'genderID', soourceKey: 'catalogvalueid' });
// Person.belongsTo(Catalogvalue, { as: 'gender', foreignKey: 'genderID', soourceKey: 'catalogvalueid' });

// Catalogvalue.hasMany(Person, { as: 'identitype', foreingKey: 'identificationType', soourceKey: 'catalogvalueid' });
// Person.belongsTo(Catalogvalue, { as: 'identitype', foreignKey: 'identificationType', soourceKey: 'catalogvalueid' });

// Catalogvalue.hasMany(Person, { as: 'maritalpersonid', foreingKey: 'maritalstatusid', soourceKey: 'catalogvalueid' });
// Person.belongsTo(Catalogvalue, { as: 'maritalpersonid', foreignKey: 'maritalstatusid', soourceKey: 'catalogvalueid' });

// //Contact
// Catalogvalue.hasMany(Contact, { as: 'inputtype', foreingKey: 'inputtypeid', soourceKey: 'catalogvalueid' });
// Contact.belongsTo(Catalogvalue, { as: 'inputtype', foreignKey: 'inputtypeid', soourceKey: 'catalogvalueid' });

// //Employee
// Catalogvalue.hasMany(Employee, { as: 'position', foreingKey: 'positionid', soourceKey: 'catalogvalueid' });
// Employee.belongsTo(Catalogvalue, { as: 'position', foreignKey: 'positionid', soourceKey: 'catalogvalueid' });
module.exports = { Catalogvalue };