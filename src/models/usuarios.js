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
    async getUsuarios(){
        try {
            
        } catch (error) {
            
        }
    }
    async createUsuarios(nombre_usuario,apellido_usuario,correo,password,tipo_usuario) {
        try {
            const[result] = await connection.query('insert into usuarios (nombre_usuario, apellido_usuario, correo, password, tipo_usuario)values (?, ?, ?, ?, ?)',
                [nombre_usuario,apellido_usuario,correo,password,tipo_usuario]);
                return {id_usuario:result.id_usuario,
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
    async updateUsuarios(id_usuario,nombre_usuario,apellido_usuario,correo,password,tipo_usuario) {
        try {
            const[result] = await connection.query('UPDATE usuarios SET id_usuario = ? ,nombre_usuario = ?, apellido_usuario = ?, correo = ?, password = ?, tipo_usuario = ? WHERE id_usuario = ?',
                [id_usuario,nombre_usuario,apellido_usuario,correo,password,tipo_usuario]);
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
            throw new Error("Error: al Crear los usuarios");
        }
    };
}

// exportamos la busqueda 
export default Usuarios;
