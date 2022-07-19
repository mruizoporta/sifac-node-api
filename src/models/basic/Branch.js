import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';

const Branch = sequelize.define('bsc_branch', {
    branchid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    location: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    managerid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    city_cityid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    statusid: {
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
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

export default Branch;