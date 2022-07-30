import Sequelize from 'sequelize';
import { sequelize } from '../../database/database.js';
import Company from './Company';
import Person from './Person';
//import Country from './Country.js';

const City = sequelize.define('bsc_city', {
    cityid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    country_countryid: {
        type: Sequelize.INTEGER
    },
    isactive: {
        type: Sequelize.BOOLEAN
    },
    createdon: {
        type: Sequelize.DATE
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

// Country.hasMany(City, { as: 'city', foreingKey: 'country_countryid', soourceKey: 'countryid' });
// City.belongsTo(Country, { as: 'country', foreingKey: 'country_countryid', soourceKey: 'countryid' });

City.hasMany(Company, { foreingKey: 'bsc_city_cityid', soourceKey: 'cityid' });
Company.belongsTo(City, { foreingKey: 'bsc_city_cityid', soourceKey: 'cityid' });

City.hasMany(Person, { foreingKey: 'bsc_city_cityid', soourceKey: 'cityid' });
Person.belongsTo(City, { foreingKey: 'bsc_city_cityid', soourceKey: 'cityid' });

// City.hasMany(Company, { as: 'company', foreingKey: 'city_cityid', soourceKey: 'cityid' });
// Company.belongsTo(City, { as: 'company_city', foreingKey: 'city_cityid', soourceKey: 'cityid' });

export default City;