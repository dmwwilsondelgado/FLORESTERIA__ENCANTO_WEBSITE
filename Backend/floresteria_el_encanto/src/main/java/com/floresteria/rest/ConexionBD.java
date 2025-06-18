package com.floresteria.rest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionBD {
    private static final String URL = "jdbc:mysql://localhost:3306/floresteria_encanto_database";
    private static final String USER = "wilsondelgado";
    private static final String PASSWORD = "1102717619";

    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            return DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (ClassNotFoundException e) {
            throw new SQLException("Error cargando el driver JDBC", e);
        }
    }
}