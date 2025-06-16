/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package CONTROLADOR;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class UsuariosServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        try (Connection con = ConexionBD.conectar_metodo()) {
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM usuarios");

            StringBuilder json = new StringBuilder();
            json.append("[");
            while (rs.next()) {
                json.append("{")
                    .append("\"id_usuario\":").append(rs.getInt("id_usuario")).append(",")
                    .append("\"nombre_usuario\":\"").append(rs.getString("nombre_usuario")).append("\",")
                    .append("\"apellido\":\"").append(rs.getString("apellido")).append("\"")
                    .append("},");
            }
            if (json.charAt(json.length() - 1) == ',') {
                json.deleteCharAt(json.length() - 1);
            }
            json.append("]");

            out.print(json.toString());
        } catch (Exception e) {
            out.print("{\"error\":\"" + e.getMessage() + "\"}");
        }
    }
}
