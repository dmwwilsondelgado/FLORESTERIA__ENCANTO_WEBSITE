import connection from "../utils/db.js";


class Categoria {
    async getAllCategorias () {
        try {
            const [rows] = await connection.query("SELECT * FROM categoria_articulos");
            return rows;
        } catch (error) {
            throw new Error("No se a podido traer Categoria de articulos");
            
        }
    }
}


export default Categoria;