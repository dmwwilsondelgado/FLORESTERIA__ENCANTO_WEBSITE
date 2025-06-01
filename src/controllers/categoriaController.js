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
}


export default CategoriaController;