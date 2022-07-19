import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';

const Parameter = sequelize.define('bsc_parameter', {
    parameterid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(250),
        allowNull: true
    },
    value: {
        type: Sequelize.STRING(250),
        allowNull: true
    },
    createdby: {
        type: Sequelize.STRING(30),
        allowNull: true
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

export default Parameter;