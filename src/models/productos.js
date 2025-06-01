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
    async createProducto(nombre_producto,descripcion,precio,stock,categoria_producto) {
        try {
            const [result] = await connection.query("INSERT INTO productos (nombre_producto, descripcion, precio, stock, categoria_producto) values('?', ?, ?, ?, ?, ?)",
            [nombre_producto,descripcion,precio,stock,categoria_producto]);
            return{id_producto:result.insertId,
            nombre_producto,
            descripcion,
            precio,
            stock,
            categoria_producto
        }
        } catch (error) {
            throw new Error("Eror al crear Producto");
        }
    } 
    async updateProducto(id_usuario,nombre_producto,descripcion,precio,stock,categoria_producto) {
        try {
            const [result] =  await connection.query("",
                [id_usuario,nombre_producto,descripcion,precio,stock,categoria_producto]
            )
            if (result.affectedRows === 0) {
                throw new Error(" Producto no encontrado");              
            }
            return{
                id_usuario,
                nombre_producto,
                descripcion,
                precio,
                stock,
                categoria_producto
            }
        } catch (error) {
            throw error 
        }
    }
    async deleteProducto (id_producto){
        try {
            const [result] = await connection.query("DELETE FROM productos WHERE id_profucto = ?",
            [id_producto]);
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

export default Productos;