const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Roleaction = require('../security/Roleaction');
const Accountrole = require('../security/Accountrole');

const Role = sequelize.define('sec_role', {
    roleid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    name: {
        type: Sequelize.STRING(50),
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

Role.hasMany(Roleaction, { foreingKey: 'roleid', soourceKey: 'roleid' });
Roleaction.belongsTo(Role, { foreingKey: 'roleid', soourceKey: 'roleid' });

Role.hasMany(Accountrole, { foreingKey: 'roleid', soourceKey: 'roleid' });
Accountrole.belongsTo(Role, { foreingKey: 'roleid', soourceKey: 'roleid' });

module.exports = Role;