const { Router } = require('express');
const { check } = require('express-validator');
const { loginUsuario, revalidarToken } = require('../controllers/auth.controller');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post('/login', [
        check('email', 'El correo es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validarCampos
    ],
    loginUsuario);


// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;