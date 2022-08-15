const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Person = sequelize.define('bsc_person', {
    personid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    gender_i_d: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    identification_type: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    identification: {
        type: Sequelize.STRING(150),
        allowNull: true
    },
    bsc_city_cityid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    birthdate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    maritalstatusid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    islegal: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    businessname: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    companyacronym: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    createdon: {
        type: Sequelize.DATE,
        allowNull: false
    },
    createdby: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    modifiedon: {
        type: Sequelize.DATE,
        allowNull: true
    },
    modifiedby: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    bsc_company_companyid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    bsc_catalogvalue_catalogvalueid: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});


//Person.hasMany(Contact, { as: 'Person', foreingKey: 'personid', soourceKey: 'personid' });
//Contact.belongsTo(Person, { foreingKey: 'personid', soourceKey: 'personid' });


module.exports = Person;