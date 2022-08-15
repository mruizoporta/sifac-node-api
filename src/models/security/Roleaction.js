const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Roleaction = sequelize.define('sec_roleaction', {
    roleactionid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    actionid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    roleid: {
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

module.exports = Roleaction;