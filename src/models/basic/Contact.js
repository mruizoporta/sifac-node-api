import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';

const Contact = sequelize.define('bsc_contact', {
    contactid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    personaid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    inputtypeid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    createdby: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    modifiedon: {
        type: Sequelize.DATE,
        allowNull: false
    },
    modifiedby: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true,
    underscored: true
});

export default Contact;