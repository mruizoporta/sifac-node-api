const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Routes = sequelize.define('bsc_routes', {
    routeid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    code: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    day: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    bsc_city_cityid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    collectorid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    supervisorid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isactive: {
        type: Sequelize.BOOLEAN,
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
    zoneid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    secretariaid: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = { Routes };