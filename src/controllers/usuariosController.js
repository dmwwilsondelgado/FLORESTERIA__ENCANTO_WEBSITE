import Usuarios from "../models/usuarios.js";

class UsuariosController {
    static getAllUsuarios = async(req, res) => {
        const OBJUsuarios = new Usuarios();
        res.json(Usuarios);
    }
}

export default UsuariosController;