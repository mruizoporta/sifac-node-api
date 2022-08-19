const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Customer = sequelize.define('fac_customer', {
    customerid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    personid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = { Customer };