const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Role = require('../security/Role');
const Module = require('../security/Module');

const Application = sequelize.define('sec_application', {
    applicationid: {
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

Application.hasMany(Role, { foreingKey: 'applicationid', soourceKey: 'applicationid' });
Role.belongsTo(Application, { foreingKey: 'applicationid', soourceKey: 'applicationid' });

Application.hasMany(Module, { foreingKey: 'applicationid', soourceKey: 'applicationid' });
Module.belongsTo(Application, { foreingKey: 'applicationid', soourceKey: 'applicationid' });

module.exports = Application;