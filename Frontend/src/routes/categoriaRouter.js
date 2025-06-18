import express from 'express'
import CategoriaController from '../controllers/categoriaController.js'
const router = express.Router();


router.get('/', CategoriaController.getAllCategorias);
// Obtener un producto por su ID
router.get('/:id_categoria_producto', CategoriaController.getCategoriasById);
// Crear un nuevo producto
router.post('/', CategoriaController.createCategoria);
// Actualizar un producto completamente (PUT)
router.put('/:id_categoria_producto', CategoriaController.updateCategorias);
// Eliminar un producto
router.delete('/:id_categoria_producto', CategoriaController.deleteCategoria);


export default router;