const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Products = require("../inventory/Products");

const Brands = sequelize.define('bsc_brands', {
    brandid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    bsc_company_companyid: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

// Brands.hasMany(Products, { foreingKey: 'brandid', soourceKey: 'brandid' });
// Products.belongsTo(Brands, { foreingKey: 'brandid', soourceKey: 'brandid' });


module.exports = { Brands };