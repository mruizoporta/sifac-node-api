const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'blessja2_SIFAC',
    'blessja2_ADMINSIFAC',
    'Blessing2021$', {
        host: '68.66.224.22',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false // Para que no muestre mas mensajes en consola
    }
)

module.exports = {
    sequelize
}