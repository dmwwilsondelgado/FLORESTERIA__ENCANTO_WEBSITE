import connection from "../utils/db.js";

class Usuarios {
    /**
   * Metodo para obtener los registros de la base de datos
   * @returns  {Array} listado de los usuarios en un arreglo
   */
  // creamos una funcion asincrona  esta esta compuesta por un try catch que captura el error y si funcina 
  //consulta ala base de datos danto un objeto 
    async getAll() {
        try {
            const[rows] = await connection.query("SELECT * FROM usuarios");
            return[rows];
        } catch (error) {
            throw new Error("Error: al Obtener los Uusarios");
        }
    }
}

// exportamos la busqueda 
export default Usuarios;
