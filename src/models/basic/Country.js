import Sequelize from 'sequelize';
import { sequelize } from '../../database/database.js';

import City from './city.js';
import Person from './Person';

const Country = sequelize.define('bsc_country', {
    countryid: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
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
    },
    code: {
        type: Sequelize.STRING(5),
        allowNull: true
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

Country.hasMany(City, { as: 'city', foreingKey: 'country_countryid', soourceKey: 'countryid' });
City.belongsTo(Country, { as: 'country', foreingKey: 'country_countryid', soourceKey: 'countryid' });

Country.hasMany(Person, { foreingKey: 'countryid', soourceKey: 'countryid' });
Person.belongsTo(Country, { foreingKey: 'countryid', soourceKey: 'countryid' });

export default Country;