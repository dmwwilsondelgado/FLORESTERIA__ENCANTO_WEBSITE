import Productos from "../models/productos.js";

class ProductosController {
  static getAllProductos = async (req, res) => {
    try {
      const productos = new Productos();
      const resultado = await productos.getAllProductos();
      res.json(resultado);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
  static getProductosById = async (req, res) => {
    try {
      const { id_producto } = req.params;
      const productos = new Productos();
      const resultado = await productos.getProductosById(id_producto);
      res.json(resultado);
    } catch (error) {
      // Si el error trae status 404, lo usamos; si no, asumimos 500
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
      }
  }
  static createProducto = async (req,res) => {
    try {
      const {nombre_producto,descripcion,precio,stock,categoria_producto} = req.body;
      const productos = new Productos();
      const  resultado  = await productos.createProducto(nombre_producto,descripcion,precio,stock,categoria_producto);
      res.status(201).json(resultado);
      } catch (error) {
      res.status(500).json({erro:error.message})
      }
  }
  static updateProducto = async (req,res) => {
    try {
      const id_producto = parseInt(req.params.id_usuario,10);
      const {nombre_producto,descripcion,precio,stock,categoria_producto} = req.body;
      if (isNaN(id_usuario)) {
          return res.status(400).json({
          mensage: "ID Prodcuto invalido intente de nuevo"
      })
      }
      const respuesta = await new Productos().updateProducto(
        id_producto,
        nombre_producto,
        descripcion,
        precio,
        stock,
        categoria_producto
        )
      if (!respuesta) {
        return res.status(404),json({mensage: "Producto no encontrado "})
        }
        res.status(200).json(respuesta)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static deleteProducto = async (req, res) => {
    try {
      const id = parseInt(req.params.id_usuario,10)
      if (isNaN(id)) {
        return res.status(400).json({mensage: 'ID usuario Inavlido'});
      }
      const ok = await new Productos().deleteProducto(id);
      if (!ok) return res.status(404).json({ mensaje: 'Prodcuto no encontrado' });
    
      res.status(200).json({ mensaje: 'Producto eliminado con exito ' });
    } catch (error) {
        throw error;
    }
  }
}


export default ProductosController;