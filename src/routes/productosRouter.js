import express from "express";
import ProductosController from "../controllers/productosController.js"
const  router = express.Router();

router.get('/', ProductosController.getAllProductos);
// Obtener un usuario por su ID
router.get('/:id_usuario', ProductosController.getPrtoductosById);
// Crear un nuevo usuario
router.post('/', ProductosController.createProducto);
// Actualizar un usuario completamente (PUT)
router.put('/:id_usuario', ProductosController.updateProducto);
// Eliminar un usuario
router.delete('/:id_usuario', ProductosController.deleteProducto);

export default router;