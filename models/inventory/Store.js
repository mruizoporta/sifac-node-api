const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Store = sequelize.define('inv_store', {
    storeid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    code: {
        type: Sequelize.STRING(4),
        allowNull: true
    },
    bsc_city_cityid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    managerid: {
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
    },
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});


module.exports = { Store };