import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';

const Person = sequelize.define('bsc_person', {
    personid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    firstname: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    genderID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    identificationType: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    identification: {
        type: Sequelize.STRING(150),
        allowNull: true
    },
    city_cityid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    countryid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(500),
        allowNull: false
    },
    birthdate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    maritalstatusid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    islegal: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    businessname: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    companyacronym: {
        type: Sequelize.STRING(255),
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
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

export default Person;