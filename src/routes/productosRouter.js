import express from "express";
import ProductosController from "../controllers/productosController.js"
const  router = express.Router();
router.get('/',ProductosController);
router.get('/',ProductosController);
// router.post('/id_producto');
// router.put('/id_producto');
// router.patch('/');
// router.delete('/id_producto')

export default router;