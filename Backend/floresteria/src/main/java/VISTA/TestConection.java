/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package VISTA;

/**
 *
 * @author Propietario
 */

import CONTROLADOR.ConexionDB;
import java.sql.Connection;
public class TestConection {
    public static void main(String[] args) {
        try   (Connection conn = ConexionDB.getConexion() )  {
            System.out.println("Conexion Exitosa ");
        } catch (Exception e) {
            System.out.println("Conexion No Exitosa");
        }
    }
}
