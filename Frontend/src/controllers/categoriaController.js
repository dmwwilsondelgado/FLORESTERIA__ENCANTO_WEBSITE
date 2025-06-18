import Categorias from "../models/categoria";

class CategoriaController {
    static getAllCategorias = async (req,res) =>{
        try {
            const categorias = new Categorias();
            const resultado = await categorias.getAllCategorias();
            res.json(resultado);
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
    static getCategoriasById = async (req,res) =>{
        try {
            const { id_categoria_producto} = req.params;
            const categoria = new Categorias();
            const resultado = await categoria.getCategoriaById(id_categoria_producto);
            res.json(resultado); 
        } catch (error) {
            const status = error.status || 500;
            res.status(status).json({ error: error.message });
        }
    }
    static createCategoria = async (req,res) =>{
        try {
            const{nombre_categoria} = req.body;
            const categorias = new Categorias();
            const resultado = await categorias.createCategoria(nombre_categoria);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({error:error.message});
        }
    }
    static updateCategorias = async (req ,res) =>{
        try {
            const id_categoria_producto = parseInt(req.params.id_categoria_producto,10);
            const {nombre_categoria}  =  req.body;
            if (isNaN(id_categoria_producto)) {
                return res.status(400).json({
                    message: " ID categoria invalida intente de nuevo "
                })
            }
            const respuesta = await new Categorias().updateCategoria(
                nombre_categoria,
            );
            if (!respuesta) {
                return res.status(400).json({
                    message: " Categoria Inavalida intente de nuevo "
                });
            }
            res.status(200).json(respuesta)
        } catch (error) {
            res.status(500).json({
                error:error.message
            })
        }
    }
    static deleteCategoria  = async ( req, res ) => {
        try {
            const id = parseInt(req.params.id_categoria_producto,10);
            if (isNaN(id)) {
                return res.status(400).json({
                    message: " ID  categoria invalida "
                })
            }
            const respuesta = await new Categorias().deleteCategoria(id);
            if (!respuesta) {
                return res.status(404).json({
                    message: "Categoria No Encontrada "
                });
            }
            res.status(200).json({ 
                message: " Categoria eliminada Corectamente " 
            });
        } catch (error) {
            throw error
        }
    }
}


export default CategoriaController;