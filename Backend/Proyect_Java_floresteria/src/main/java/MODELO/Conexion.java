/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package MODELO;

/**
 *
 * @author Propietario
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import javax.swing.JOptionPane;


public class Conexion {
    private static final String URL = "jdbc:mysql://localhost:3306/floresteria_encanto_database";
    private  static  final String USER ="wilsondelgado";
    private  static final String PASW = "1102717619";
    public static  Connection conectar(){
        try {
            Connection getconexion = DriverManager.getConnection(URL,USER,PASW);
            JOptionPane.showMessageDialog(null, "Conexion exitosa");
            System.out.println("Conexion Exitosa");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "Conexion Fallida");
            return null;
        }
        return null;
    }
}
