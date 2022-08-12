import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';
import CompanyAccount from "./CompanyAccount.js";
import Category from '../inventory/Category.js';
import Brands from "./Brands.js";
import Person from "./Person.js";
import Routes from "./RoutesCollector.js";
import Products from "../inventory/Products.js";

const Company = sequelize.define('bsc_company', {
    companyid: {
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
    bsc_city_cityid: {
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

Company.hasMany(CompanyAccount, { foreingKey: 'companyid', soourceKey: 'companyid' });
CompanyAccount.belongsTo(Company, { foreingKey: 'companyid', soourceKey: 'companyid' });

Company.hasMany(Category, { foreingKey: 'companyid', soourceKey: 'companyid' });
Category.belongsTo(Company, { foreingKey: 'companyid', soourceKey: 'companyid' });

Company.hasMany(Brands, { foreingKey: 'companyid', soourceKey: 'companyid' });
Brands.belongsTo(Company, { foreingKey: 'companyid', soourceKey: 'companyid' });

Company.hasMany(Person, { foreingKey: 'companyid', soourceKey: 'companyid' });
Person.belongsTo(Company, { foreingKey: 'companyid', soourceKey: 'companyid' });

Company.hasMany(Routes, { foreingKey: 'bsc_company_companyid', soourceKey: 'companyid' });
Routes.belongsTo(Company, { foreingKey: 'bsc_company_companyid', soourceKey: 'companyid' });

Company.hasMany(Products, { foreingKey: 'bsc_company_companyid', soourceKey: 'companyid' });
Products.belongsTo(Company, { foreingKey: 'bsc_company_companyid', soourceKey: 'companyid' });


export default Company;