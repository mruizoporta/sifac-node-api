import Sequelize from 'sequelize';
import { sequelize } from '../../database/database.js';
import Branch from './Branch.js';
import Person from './Person';

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

City.hasMany(Branch, { foreingKey: 'city_cityid', soourceKey: 'cityid' });
Branch.belongsTo(City, { foreignKey: 'city_cityid', soourceKey: 'cityid' });

City.hasMany(Person, { foreingKey: 'city_cityid', soourceKey: 'cityid' });
Person.belongsTo(City, { foreingKey: 'city_cityid', soourceKey: 'cityid' });

export default City;