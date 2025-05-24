const express = require('express');
const router  = express.Router();
const usuariosController = require('../controllers/usuariosController.js')
//crud de postman 
router.get('/',usuariosController)


module.exports = router;