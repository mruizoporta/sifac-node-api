const Sequelize = require("sequelize");
const { sequelize } = require('../../database/database.js');

const Zone = sequelize.define('bsc_zone', {
    zoneid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
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

// Zone.hasMany(Routes, { foreingKey: 'zoneid', soourceKey: 'zoneid' });
// Routes.belongsTo(Zone, { foreingKey: 'zoneid', soourceKey: 'zoneid' });


module.exports = { Zone };