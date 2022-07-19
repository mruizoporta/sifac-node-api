import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';
import Account from '../security/Account';

const Employees = sequelize.define('bsc_employees', {
    employeesid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    personaid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    branchid: {
        type: Sequelize.INTEGER,
        allowNull: true
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

Employees.hasMany(Account, { foreingKey: 'employeesid', soourceKey: 'employeesid' });
Account.belongsTo(Employees, { foreingKey: 'employeesid', soourceKey: 'employeesid' });


export default Employees;