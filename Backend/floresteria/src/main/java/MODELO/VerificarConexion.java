/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package MODELO;
import CONTROLADOR.ConexionDB;

/**
 *
 * @author Propietario
 */

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.sql.Connection;

@Path("/conexion")
public class VerificarConexion {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String probarConexion() {
        try (Connection conn = ConexionDB.obtenerConexion()) {
            if (conn != null && !conn.isClosed()) {
                return "✅ Conexión exitosa con la base de datos.";
            } else {
                return "❌ Falló la conexión.";
            }
        } catch (Exception e) {
            return "❌ Error al conectar: " + e.getMessage();
        }
    }
}
