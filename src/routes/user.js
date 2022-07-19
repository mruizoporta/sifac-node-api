import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos";
import { esRolValido, emailExiste } from "../helpers/db-validators";


const { usuariosGet, usuariosPatch, crearUsuario, usuariosPut, usuariosDelete, loginusuario } = require('../controllers/user.controller');

const router = Router();

router.get('/', usuariosGet);
router.put('/', usuariosPut);

router.post('/', [
    check('login', 'El nombre de usuario es obligatorio.').not().isEmpty(),
    check('password', 'El password debe ser mas de 6 letras.').isLength({ min: 6 }),
    check('email', 'El correo no es valido.').isEmail(),
    check('email').custom(emailExiste),
    check('rol').custom(esRolValido),
    validarCampos
], crearUsuario);

router.delete('/', usuariosDelete);
router.patch('/', usuariosPatch);

router.get('/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Renew'
    })
})
module.exports = router;