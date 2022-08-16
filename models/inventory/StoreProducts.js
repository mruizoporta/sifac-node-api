const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const StoreProducts = sequelize.define('inv_storeproducts', {
    storeproductsid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    storeid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    quantity: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE
    },
    modifiedby: {
        type: Sequelize.STRING(30),
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

module.exports = { StoreProducts };