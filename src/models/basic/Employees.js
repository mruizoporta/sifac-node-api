import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';
import Account from '../security/Account';
import Routes from "./RoutesCollector.js";

const Employees = sequelize.define('bsc_employees', {
    employeesid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    personid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    datestarted: {
        type: Sequelize.DATE,
        allowNull: true
    },
    dateended: {
        type: Sequelize.DATE,
        allowNull: true
    },
    positionid: {
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
        type: Sequelize.DATE,
        allowNull: true
    },
    modifiedby: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    telefono: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    bsc_company_companyid: {
        type: Sequelize.INTEGER,
        allowNull: true
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

Employees.hasMany(Account, { foreingKey: 'employeesid', soourceKey: 'employeesid' });
Account.belongsTo(Employees, { foreingKey: 'employeesid', soourceKey: 'employeesid' });

Employees.hasMany(Routes, { foreingKey: 'collectorid', soourceKey: 'employeesid' });
Routes.belongsTo(Employees, { foreingKey: 'collectorid', soourceKey: 'employeesid' });

Employees.hasMany(Routes, { foreingKey: 'supervisorid', soourceKey: 'employeesid' });
Routes.belongsTo(Employees, { foreingKey: 'supervisorid', soourceKey: 'employeesid' });


export default Employees;