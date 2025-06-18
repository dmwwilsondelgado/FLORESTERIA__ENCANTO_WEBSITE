import express from "express";
import usuariosRoutes from "./src/routes/usuariosRouter.js";
import productosRoutes from "./src/routes/productosRouter.js";
import bodyParser from "body-parser";
const { json } = bodyParser;

const app = express();

// Middleware para recibir JSON y formularios urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // sin esto naaa  para recibir formualrios activos

app.use("/usuarios", usuariosRoutes);
app.use("/productos", productosRoutes);

const url = fetch("");

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/floresteria_el_encanto/api/usuarios")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json();
    })
    .then((data) => {
      const lista = document.getElementById("usuarios");
      lista.innerHTML = "";
      data.forEach((usuario) => {
        const li = document.createElement("li");
        li.textContent = `${usuario.nombre} ${usuario.apellido}`;
        lista.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios:", error);
    });
});


app.listen(3000, () => {
  console.log(`Servidor corriendo en: http://localhost:3000`);
  console.log("   .--.  ");
  console.log("  |o_o | ");
  console.log("  | :/ | ");
  console.log(" //    |Hi developer im  Love for Linux");
  console.log("(:|    |::::::)");
  console.log("/'//_   _/`");
  console.log("\\___)=(___/");
});



