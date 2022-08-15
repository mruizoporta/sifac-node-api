const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const CompanyAccount = sequelize.define('sec_companyaccount', {
    companyaccountid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    bsc_company_companyid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    sec_account_accountid: {
        type: Sequelize.INTEGER,
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
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = CompanyAccount;