import Sequelize from 'sequelize';
import { sequelize } from '../../database/database';

const Products = sequelize.define('inv_products', {
    productsid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    categoryid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    brandid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    minimumquantity: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE
    },
    modifiedby: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    utilitymargin_credit: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: true
    },
    utilitymargin_cash: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: true
    },
    averagecost: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: true
    },
    creditprice: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: true
    },
    cashprice: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: true

    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

export default Products;