import express from "express";

import UsuariosController from "../controllers/usuariosController.js";
const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);
// Obtener un usuario por su ID
router.get('/:id_usuario', UsuariosController.getUsuarioById);
// Crear un nuevo usuario
router.post('/', UsuariosController.createUsuarios);
// Actualizar un usuario completamente (PUT)
router.put('/:id_usuario', UsuariosController.updateUsuario);
// Eliminar un usuario
router.delete('/:id_usuario', UsuariosController.deleteUsuario);
1
export default router;