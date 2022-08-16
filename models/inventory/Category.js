const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Products = require("../inventory/Products");

const Category = sequelize.define('inv_category', {
    categoryid: {
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
        allowNull: true
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
    bsc_company_companyid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});


// Category.hasMany(Products, { foreingKey: 'categoryid', soourceKey: 'categoryid' });
// Products.belongsTo(Category, { foreingKey: 'categoryid', soourceKey: 'categoryid' });

module.exports = { Category };