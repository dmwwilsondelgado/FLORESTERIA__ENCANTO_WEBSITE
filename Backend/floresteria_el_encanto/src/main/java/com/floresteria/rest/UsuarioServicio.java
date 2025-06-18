package com.floresteria.rest;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UsuarioServicio {

    @GET
    public List<Usuario> obtenerTodos() {
        List<Usuario> lista = new ArrayList<>();
        try (Connection conn = ConexionBD.getConnection()) {
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM usuarios");
            while (rs.next()) {
                lista.add(new Usuario(
                    rs.getInt("id_usuario"),
                    rs.getString("nombre_usuario"),
                    rs.getString("apellido_usuario"),
                    rs.getString("correo"),
                    rs.getString("password"),
                    rs.getString("tipo_usuario")
                ));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lista;
    }

    @GET
    @Path("/{id}")
    public Usuario obtenerPorId(@PathParam("id") int id) {
        Usuario usuario = null;
        try (Connection conn = ConexionBD.getConnection()) {
            PreparedStatement ps = conn.prepareStatement("SELECT * FROM usuarios WHERE id_usuario = ?");
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                usuario = new Usuario(
                    rs.getInt("id_usuario"),
                    rs.getString("nombre_usuario"),
                    rs.getString("apellido_usuario"),
                    rs.getString("correo"),
                    rs.getString("password"),
                    rs.getString("tipo_usuario")
                );
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return usuario;
    }
}