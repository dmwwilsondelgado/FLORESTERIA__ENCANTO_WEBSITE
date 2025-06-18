import express from "express";
import ProductosController from "../controllers/productosController.js"
const  router = express.Router();

router.get('/', ProductosController.getAllProductos);
// Obtener un producto por su ID
router.get('/:id_producto', ProductosController.getProductosById);
// Crear un nuevo producto
router.post('/', ProductosController.createProducto);
// Actualizar un producto completamente (PUT)
router.put('/:id_producto', ProductosController.updateProducto);
// Eliminar un producto
router.delete('/:id_producto', ProductosController.deleteProducto);

export default router;