import connection from "../utils/db.js";
class Productos {
    async getAllProductos() {
        try {
            const [rows] = await connection.query("SELECT * FROM productos");
            return rows;
        } catch (error) {
            throw new Error("No se a podido traer Productos vuelve a intentarlo  ");
        }
    }
    async getProductosbyId(id){
        try {
            const [rows] = await connection.query("SELECT  * FROM  productos WHERE id_producto = ? ",[id]);
            if (rows.affectedRows === 0) {
                const err  = new Error("Producto No Encontrado")
                err.status(404);
                throw err;
            }
            return rows[0];
        } catch (error) {
            if (error.status === 404) {
                throw error 
            };
            throw new Error(" Error al  obtener  Productos por id :");
        }
    }
}

export default Productos;