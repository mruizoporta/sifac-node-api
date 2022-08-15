const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');
const Catalogvalue = require('./Catalogvalue.js');

const Catalog = sequelize.define('bsc_catalogs', {

    catalogid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(250),
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
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});


Catalog.hasMany(Catalogvalue, { as: 'catalogvalue', foreingKey: 'catalog_catalogid', soourceKey: 'catalogid' });
Catalogvalue.belongsTo(Catalog, { as: 'catalog', foreingKey: 'catalog_catalogid', soourceKey: 'catalogid' });



module.exports = Catalog;