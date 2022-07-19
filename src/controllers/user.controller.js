const { response, default: e } = require('express');
const { generarJWT } = require('../helpers/generar-jwt');
import Account from '../models/security/Account.js';
import { encrypt } from '../helpers/handleBcrypt.js';

async function usuariosGet(req, res) {
    try {
        const account = await Account.findAll({
            attributes: {
                exclude: ['password']
            }
        });
        res.json({
            data: account
        });

    } catch (error) {

        console.log(error);
    }
}

async function crearUsuario(req, res) {

    const { login, password, isactive, createdon, createdby, email } = req.body;
    try {

        const passwordHash = await encrypt(password);
        //Guardar en BD|||
        let newAccount = await Account.create({ login, password: passwordHash.trim(), isactive, createdon, createdby, email });
        //Generar e; JWT
        const token = await generarJWT(newAccount.accountid);

        if (newAccount) {
            let response = {
                "Account": {
                    "login": newAccount.login,
                    "email": newAccount.email
                }
            };

            return res.json({
                message: "Usuario creado satisfactoriamente.",
                data: response,
                token
            });
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error + "Error al registrar el usuario.",
            data: {}
        });

    }


    /* res.json({
         msg: 'Post API - Controller',
         account
     });*/
}

const usuariosPut = (req, res = response) => {
    // const { id } = req.params;
    // const { password, google, ...resto } = req.body;

    // if (password) {
    //     //Encriptar la contrasena
    //     const salt = bcryptjs.genSaltSync();
    //     resto.password = bcryptjs.hashSync(password, salt);
    // }

    // // const account = await Account.findByIdAndUpdate(id, resto);


    res.json({ msg: 'Put API - Controlador' });
}

const usuariosPatch = (req, res = response) => {
    res.json({ msg: 'Patch API - Controlador' });
}

const usuariosDelete = (req, res = response) => {
    res.json({ msg: 'Delete API - Controlador' });
}

module.exports = {
    usuariosGet,
    crearUsuario,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}