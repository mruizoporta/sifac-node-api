import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';

const Brand = sequelize.define('bsc_brands', {
    brandid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    isactive: {
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

export default Brand;