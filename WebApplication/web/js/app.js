/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


fetch('http://localhost:8080/WebApplication/api/usuarios')
  .then(response => response.json())
  .then(data => {
    console.log('Usuarios:', data);
    // aquí puedes pintarlo en una tabla o en HTML
  })
  .catch(error => {
    console.error('Error al obtener usuarios:', error);
  });
