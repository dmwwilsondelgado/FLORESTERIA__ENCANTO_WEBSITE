const express = require('express');
import UsuariosController from "../controllers/usuariosController.js";

//crud de postman 
router.get('/',UsuariosController.getAllUsuarios);

const router  = express.Router();
module.exports = router;