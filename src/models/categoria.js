import connection from "../utils/db.js";
class Categorias {
    /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array<Object>} listado de los usuarios en un arreglo
   */
  //creamos una funcion asincrona  esta esta compuesta por un try catch que captura el error y si funcina 
  //consulta ala base de datos danto un objeto 
    async getAllCategorias () {
        try {
            const [rows] = await connection.query("SELECT * FROM categoria_articulos");
            return rows;
        } catch (error) {
            throw new Error("No se a podido traer Categoria de articulos");
        }
    }
    async getCategoriaById(id){
        try {
            const [rows] = await connection.query("SELECT  * FROM  categoria_articulos WHERE id_categoria_producto = ? ",[id]);
            if (rows.affectedRows === 0) {
                const err  = new Error("Categoria No Encontrada")
                err.status(404);
                throw err;
            }
            return rows[0];
        } catch (error) {
            if (error.status === 404) {
                throw error 
            };
            throw new Error(" Error al  obtener  Categoria por id :");
        }
    }
    async createCategoria(nombre_categoria) {
        try {
            const [result] = await connection.query("INSERT INTO categoria_articulos(nombre_categoria ) values(?)",
            [nombre_categoria]);
            return{id_producto:result.insertId,
            nombre_categoria
        }
        } catch (error) {
            throw new Error("Eror al crear una Categoria para el Producto");
        }
    } 
    async updateCategoria(id_categoria_producto,nombre_categoria,) {
        try {
            const [result] =  await connection.query("",
                [id_categoria_producto,nombre_categoria,]
            )
            if (result.affectedRows === 0) {
                throw new Error(" Producto no encontrado");              
            }
            return{
                id_categoria_producto,
                nombre_categoria,
            }
        } catch (error) {
            throw error 
        }
    }
    async deleteCategoria (id_categoria_producto){
        try {
            const [result] = await connection.query("DELETE FROM categoria_articulos WHERE id_categoria_producto = ?",
            [id_categoria_producto]);
            if (result.affectedRows === 0) {
                return null;
            }else{
                return result.affectedRows>0;
            }
        } catch (error) {
            throw error;
        }
    }
}


export default Categorias;