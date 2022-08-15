const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Contact = sequelize.define('bsc_contact', {
    contactid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    personid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    inputtypeid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING(30),
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
        allowNull: false
    },
    modifiedby: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    bsc_catalogvalue_catalogvalueid: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = Contact;