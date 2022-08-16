// const { response } = require('express');
const Account = require('../models/security/Account.js').Account;
const { comparar } = require('../helpers/handleBcrypt.js');
const { generarJWT } = require('../helpers/generar-jwt');

const loginUsuario = async(req, res = response) => {
    // console.log("entro al login");
    const { email, password } = req.body;

    try {

        // Verificar si el login existe
        const usuario = await Account.findOne({
            where: {
                email: email
            }
        });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // SI el usuario está activo
        if (!usuario.isactive) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = await comparar(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.accountid);

        return res.json({
            ok: true,
            accountid: usuario.accountid,
            email: usuario.email,
            login: usuario.login,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}


const revalidarToken = async(req, res = response) => {

    const { accountid, email } = req;

    // Generar el JWT
    const token = await generarJWT(accountid);
    return res.json({
        ok: true,
        accountid,
        email,
        token
    });
}


module.exports = {
    loginUsuario,
    revalidarToken
}