package com.floresteria.rest;

public class Usuario {
    private int id_usuario;
    private String nombre_usuario;
    private String apellido_usuario;
    private String correo;
    private String password;
    private String tipo_usuario;

    public Usuario() {}

    public Usuario(int id_usuario, String nombre_usuario, String apellido_usuario,
                   String correo, String password, String tipo_usuario) {
        this.id_usuario = id_usuario;
        this.nombre_usuario = nombre_usuario;
        this.apellido_usuario = apellido_usuario;
        this.correo = correo;
        this.password = password;
        this.tipo_usuario = tipo_usuario;
    }

    public int getId_usuario() { return id_usuario; }
    public void setId_usuario(int id_usuario) { this.id_usuario = id_usuario; }

    public String getNombre_usuario() { return nombre_usuario; }
    public void setNombre_usuario(String nombre_usuario) { this.nombre_usuario = nombre_usuario; }

    public String getApellido_usuario() { return apellido_usuario; }
    public void setApellido_usuario(String apellido_usuario) { this.apellido_usuario = apellido_usuario; }

    public String getCorreo() { return correo; }
    public void setCorreo(String correo) { this.correo = correo; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getTipo_usuario() { return tipo_usuario; }
    public void setTipo_usuario(String tipo_usuario) { this.tipo_usuario = tipo_usuario; }
}