import connection from "../utils/db.js";

class Usuarios {
    /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array<Object>} listado de los usuarios en un arreglo
   */
  // creamos una funcion asincrona  esta esta compuesta por un try catch que captura el error y si funcina 
  //consulta ala base de datos danto un objeto 
    async getAllUsuarios() {
        try {
            const[rows] = await connection.query("SELECT * FROM usuarios");
            return rows;
        } catch (error) {
            throw new Error("Error: al Obtener los Usuarios");
        }
    }
    // async getUsuariosBy(id) {
    //     try {
    //         const [rows] = await connection.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id]);
    //         if (rows.length === 0) {
    //             throw new Error("Usuario no Encontrado");
    //         }
    //         return rows[0];
    //     } catch (error) {
    //         throw new Error("Error: al obtener usuario por id");
    //     }
    // }
    async getUsuarioById(id) {
        try {
        const [rows] = await connection.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id]);
        if (rows.length === 0) {
            // Lanzamos un 404 más semántico
            const err = new Error("Usuario no encontrado");
            err.status = 404;
            throw err;
        }
        return rows[0];
        } catch (error) {
        // Si ya venía un status 404, lo dejamos; si no, marcamos 500
        if (error.status === 404) throw error;
            throw new Error("Error al obtener usuario por id");
        }
    }

    async createUsuarios(nombre_usuario,apellido_usuario,correo,password,tipo_usuario) {
        try {
            const[result] = await connection.query('insert into usuarios (nombre_usuario, apellido_usuario, correo, password, tipo_usuario)values (?, ?, ?, ?, ?)',
                [nombre_usuario,apellido_usuario,correo,password,tipo_usuario]);
                return {id_usuario:result.insertId,
                    nombre_usuario,
                    apellido_usuario,
                    correo,
                    password,
                    tipo_usuario
                }
        } catch (error) {
            throw new Error("Error: al Crear los usuarios");
        }
    };
    async updateUsuario(id_usuario,nombre_usuario,apellido_usuario,correo,password,tipo_usuario) {
        try {
            const[result] = await connection.query('UPDATE usuarios SET nombre_usuario = ?, apellido_usuario = ?, correo = ?, password = ?, tipo_usuario = ? WHERE id_usuario = ?',
                [nombre_usuario,apellido_usuario,correo,password,tipo_usuario,id_usuario]);
                if(result.affectedRows === 0){
                    throw new Error("Usuario no Encontrado ");
                }
                return {
                    id_usuario,
                    nombre_usuario,
                    apellido_usuario,
                    correo,
                    password,
                    tipo_usuario
                }
        } catch (error) {
            throw error;
            // throw new Error("Error: al actlizar los usuarios");
        }
    };

    async deleteUsuario(id_usuario) {
        try {
            const [result] = await connection.query(
            'DELETE FROM usuarios WHERE id_usuario = ?',
            [id_usuario]
            );
            if(result.affectedRows === 0){
            return null;
        }
        return result.affectedRows > 0;
        } catch (error){ 
            throw error
            // throw new Error("Errros al eliminiar usuario",error);
        }
    }
}

// exportamos la busqueda 
export default Usuarios;
