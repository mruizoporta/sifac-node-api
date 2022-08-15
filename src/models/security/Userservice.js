const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Action = require('../security/Action');

const Userservice = sequelize.define('sec_userservice', {
    userserviceid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    internalcode: {
        type: Sequelize.STRING(50),
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
    moduleid: {
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
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

Userservice.hasMany(Action, { foreingKey: 'userserviceid', soourceKey: 'userserviceid' });
Action.belongsTo(Userservice, { foreingKey: 'userserviceid', soourceKey: 'userserviceid' });

module.exports = Userservice;