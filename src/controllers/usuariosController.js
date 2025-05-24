import Usuarios from "../models/usuarios.js";

class UsuariosController {
    static getAllUsuarios = async (req, res) => {
    try {
      
      const usuarios = new Usuarios(); // 👈 aquí
      const resultado = await usuarios.getAllUsuarios();
      res.json(resultado);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  }
}

export default UsuariosController;