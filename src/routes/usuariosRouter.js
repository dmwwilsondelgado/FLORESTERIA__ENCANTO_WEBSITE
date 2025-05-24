const express = require('express');
import UsuariosController from "../controllers/usuariosController.js";


const router  = express.Router();
//crud de postman 
router.get('/',UsuariosController.getAllUsuarios);

module.exports = router;