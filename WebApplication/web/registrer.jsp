<%-- 
    Document   : registrer
    Created on : 16/06/2025, 9:48:40 a. m.
    Author     : Propietario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="estilos_register.css">
  <title>Registro</title>
</head>

<body>
  <div class="contenedor">
    <h2 class="titulo texto-separado">Registre sus datos</h2>
    <input type="nombre" id="usuario" class="formulario__input" placeholder="Nombre" required>
    <input type="apellidos" id="apelli2" class="formulario__input" placeholder="Apellidos" required>
    <input type="correo electronico" id="corre" class="formulario__input" placeholder="Correo electronico" required>
    <input type="contraseña" id="password" class="formulario__input" placeholder="Contraseña" required>
    <input type="confirmar contraseña" id="confpassword" class="formulario__input" placeholder="Confirmar contraseña"
      required>
    <select class="formulario__input" id="rol" name="rol">
      <option value="cliente">Cliente</option>
    </select>
    <div class="formulario__botones">
      <button class="formulario__boton">Aceptar</button>
      <a href="login.html" class="formulario__enlace ya-tengo-usuario">Ya tengo usuario</a>
    </div>
  </div>
</body>

</html>