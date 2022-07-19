import Sequelize from "sequelize";
import { sequelize } from '../../database/database.js';
import Accountrole from '../security/Accountrole';

const Account = sequelize.define('sec_account', {
    accountid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: Sequelize.STRING(50),
        allowNull: false,
        required: [true, 'El nombre de usuario es obligatorio']
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        required: [true, 'El correo es obligatorio'],
        unique: true
            /* validate: {
                 isEmail: {
                     msg: 'Email no valido'
                 }
             }*/
    },
    password: {
        type: Sequelize.STRING(80),
        allowNull: false,
        required: [true, 'La contrasena es obligatoria']
    },
    isactive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: true
    },
    expirationdate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    employeeid: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    google: {
        type: Boolean,
        default: false
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

Account.hasMany(Accountrole, { as: 'accountrole', foreingKey: 'account_accountid', soourceKey: 'accountid' });
Accountrole.belongsTo(Account, { as: 'account', foreingKey: 'account_accountid', soourceKey: 'accountid' });

//Account.hasMany(Accountrole, { foreingKey: 'accountid', soourceKey: 'accountid' });
//Accountrole.belongsTo(Account, { foreingKey: 'accountid', soourceKey: 'accountid' });

Account.findAll({
    attributes: {
        exclude: ['password']
    }
});


export default Account;