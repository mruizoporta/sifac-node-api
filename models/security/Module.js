const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Userservice = require('../security/Userservice');

const Module = sequelize.define('sec_role', {
    moduleid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    internalcode: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    applicationid: {
        type: Sequelize.INTEGER,
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
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

Module.hasMany(Userservice, { foreingKey: 'moduleid', soourceKey: 'moduleid' });
Userservice.belongsTo(Module, { foreingKey: 'moduleid', soourceKey: 'moduleid' });

module.exports = { Module };