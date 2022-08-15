const { response } = require('express');
const jwt = require('jsonwebtoken');
const Account = require('../models/security/Account');

const validarJWT = async(req = request, res = response, next) => {

    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_JWT_SEED);

        // leer el usuario que corresponde al uid
        const usuario = await Account.findOne({ where: { accountid: uid } });

        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        //Verificar si el uid tiene estado true
        if (!usuario.isactive) {
            return res.status(401).json({
                msg: 'Token no válido - usuario inactivo'
            })
        }
        req.uid = usuario.id;
        req.email = usuario.email;
        req.accountid = usuario.accountid;

    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
    // TODO OK!
    next();
}

module.exports = {
    validarJWT
}