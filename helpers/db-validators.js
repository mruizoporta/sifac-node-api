const { Role } = require('../models/security/Role');
const { Account } = require('../models/security/Account');

const esRolValido = async(rol = '') => {
    const exissteRol = await Role.findOne({
        where: {
            name: rol
        }
    });

    if (!exissteRol) {
        throw new Error(`El rol ${ rol } no esta registrado en la BD`)
    }
}


const emailExiste = async(email = '') => {

    const existeEmail = await Account.findOne({
        where: {
            email: email
        }
    });
    if (existeEmail) {
        throw new Error('Ese correo ya esta registrado')

    }

}

module.exports = {
    esRolValido,
    emailExiste
}