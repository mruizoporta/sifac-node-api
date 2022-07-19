import Sequelize from 'sequelize';
import { sequelize } from '../../database/database.js';
import Branch from './Branch';
import Person from './Person';

const Catalogvalue = sequelize.define('bsc_catalogvalues', {

    catalogvalueid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    catalog_catalogid: {
        type: Sequelize.INTEGER
    },

    createdon: {
        type: Sequelize.DATE
    },
    createdby: {
        type: Sequelize.STRING
    },
    modifiedon: {
        type: Sequelize.DATE
    },
    modifiedby: {
        type: Sequelize.STRING
    },
    isactive: {
        type: Sequelize.BOOLEAN
    },
    reserved: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

Catalogvalue.hasMany(Branch, { foreingKey: 'statusid', soourceKey: 'catalogvalueid' });
Branch.belongsTo(Catalogvalue, { foreignKey: 'statusid', soourceKey: 'catalogvalueid' });

Catalogvalue.hasMany(Person, { foreingKey: 'genderID', soourceKey: 'catalogvalueid' });
Person.belongsTo(Catalogvalue, { foreignKey: 'genderID', soourceKey: 'catalogvalueid' });

Catalogvalue.hasMany(Person, { foreingKey: 'identificationType', soourceKey: 'catalogvalueid' });
Person.belongsTo(Catalogvalue, { foreignKey: 'identificationType', soourceKey: 'catalogvalueid' });

Catalogvalue.hasMany(Person, { foreingKey: 'maritalstatusid', soourceKey: 'catalogvalueid' });
Person.belongsTo(Catalogvalue, { foreignKey: 'maritalstatusid', soourceKey: 'catalogvalueid' });

export default Catalogvalue;