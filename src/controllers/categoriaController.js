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
}


export default CategoriaController;