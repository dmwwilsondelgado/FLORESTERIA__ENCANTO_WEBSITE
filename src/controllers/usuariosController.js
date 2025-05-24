import Usuarios from "../models/usuarios.js";

class UsuariosController {
    static getAllUsuarios = async(req, res) => {
        const OBJUsuarios = new Usuarios();
        const usuarios = await OBJUsuarios.getAll();
        res.json(usuarios);
    }
}

export default UsuariosController;