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
      // Extraemos id_usuario (coincide con la ruta)
      const { id_usuario } = req.params;
      const usuarios = new Usuarios();
      const resultado = await usuarios.getUsuarioById(id_usuario);

      res.json(resultado);
    } catch (error) {
      // Si el error trae status 404, lo usamos; si no, asumimos 500
      const status = error.status || 500;
      res.status(status).json({ error: error.message });
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
  static updateUsuario = async (req,res) => {
    try {
      const id_usuario = parseInt(req.params.id_usuario,10);
      const {nombre_usuario,apellido_usuario,correo,password,tipo_usuario} = req.body;
      if (isNaN(id_usuario)) {
        return res.status(400).json({
          mensage: "ID usuario invalido intente de nuevo"
        })
      }
      const respuesta = await new Usuarios().updateUsuario(
        id_usuario,
        nombre_usuario,
        apellido_usuario,
        correo,
        password,
        tipo_usuario
      )
      if (!respuesta) {
        return res.status(404),json({mensage: "usuario no encontrado "})
      }
      res.status(200).json(respuesta)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // static patchUsuario = async (req, res) => {
  //   try {
  //     const id = parseInt(req.params.id, 10);
  //     const ok = await new Usuarios().updateParcial(req.body, id);
  //     if (!ok) return res.status(404).json({ mensaje: 'Usuario no encontrado o sin campos a actualizar' });
  //     res.status(200).json({ mensaje: 'Usuario parcialmente actualizado' });
  //   } catch (err) {
  //     res.status(500).json({ error: err.message });
  //   }
  // }

  static deleteUsuario = async (req, res) => {
    try {
      const id = parseInt(req.params.id_usuario,10)
      if (isNaN(id)) {
        return res.status(400).json({mensage: 'ID usuario Inavlido'});
      }
      const ok = await new Usuarios().deleteUsuario(id);
      if (!ok) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

      res.status(200).json({ mensaje: 'Usuario eliminado con exito ' });
    } catch (error) {
      throw error;
    }
  }
}


export default UsuariosController;