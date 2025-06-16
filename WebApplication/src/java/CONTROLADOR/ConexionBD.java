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
import java.sql.SQLException;
public class ConexionBD {
    public static  String url = "jdbc:mysql//localhost:/floresteria_encanto_database";
    public static  String user= "wilsondelgado";
    public static String password= "1102717619";
    
    public static Connection conectar_metodo(){
        Connection conexion = null; 
        try{
           Class.forName("com.mysql.cj.jdbc.Driver");
           conexion = DriverManager.getConnection(url, user, password);
        }catch(ClassNotFoundException | SQLException e){
            System.out.println("Erorr no se pudo conectar ala base de datos"+e.getMessage());
        }
        return conexion;
    }
}
