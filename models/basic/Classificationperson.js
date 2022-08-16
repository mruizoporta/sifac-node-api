const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Classificationperson = sequelize.define('bsc_classificationperson', {
    classificationpersonid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    personaid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    persontypeid: {
        type: Sequelize.INTEGER,
        allowNull: true
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

module.exports = { Classificationperson };