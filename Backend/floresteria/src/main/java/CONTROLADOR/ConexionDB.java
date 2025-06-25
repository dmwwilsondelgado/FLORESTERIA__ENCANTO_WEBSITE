/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package CONTROLADOR;

/**
 *
 * @author Propietario
 */

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionDB {
    public static Connection getConexion() throws Exception {
        String url = "jdbc:mysql://localhost:3306/floresteria_encanto_database";
        String user = "wilsondelgado";
        String pass = "1102717619";
        Class.forName("com.mysql.cj.jdbc.Driver");
        return DriverManager.getConnection(url, user, pass);
    }
}



