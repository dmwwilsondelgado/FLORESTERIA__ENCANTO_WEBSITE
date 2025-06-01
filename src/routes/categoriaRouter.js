import express from 'express'
import CategoriaController from '../controllers/categoriaController.js'
const router = express.Router();


router.get('/', CategoriaController.getAllProductos);
// Obtener un producto por su ID
router.get('/:id_producto', CategoriaController.getPrtoductosById);
// Crear un nuevo producto
router.post('/', CategoriaController.createProducto);
// Actualizar un producto completamente (PUT)
router.put('/:id_producto', CategoriaController.updateProducto);
// Eliminar un producto
router.delete('/:id_producto', CategoriaController.deleteProducto);
