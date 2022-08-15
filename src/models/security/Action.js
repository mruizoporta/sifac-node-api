const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Action = sequelize.define('sec_action', {
    actionid: {
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
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    userserviceid: {
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

Action.hasMany(Roleaction, { foreingKey: 'actionid', soourceKey: 'actionid' });
Roleaction.belongsTo(Action, { foreingKey: 'actionid', soourceKey: 'actionid' });

module.exports = Action;