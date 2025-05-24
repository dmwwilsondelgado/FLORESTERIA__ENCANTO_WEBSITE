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
  static getUsuarioById = async (req, res) => {
    try {
      const { id } = req.params;
      const usuarios = new Usuarios(); // 👈 Asumiendo que Usuarios tiene el método getById
      const resultado = await usuarios.getById(id);

      if (!resultado) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }

      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static createUsuarios = async (req,res) => {
    try {
      const {nombre_usuario,apellido_usuario,correo,password,tipo_usuario} = req.body;
      const usuarios = new Usuarios();
      const  resultado  = await usuarios.createUsuarios(nombre_usuario,apellido_usuario,correo,password,tipo_usuario);
      res.status(201).json(resultado);
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
}  


export default UsuariosController;