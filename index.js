import express from 'express';
import usuariosRoutes from './src/routes/usuariosRouter.js';

import bodyParser from 'body-parser';
const { json } = bodyParser;


const app = express();

// Middleware para recibir JSON y formularios urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // sin esto naaa  para recibir formualrios activos


app.use('/usuarios', usuariosRoutes); 
app.use('')



app.listen(3000, () => 
{
console.log(`Servidor corriendo en: http://localhost:3000`);
console.log("   .--.  ");
console.log("  |o_o | ");
console.log("  | :/ | ");
console.log(" //    |Hi developer im  Love for Linux");
console.log("(:|    |::::::)");
console.log("/'//_   _/`");
console.log("\\___)=(___/");
},
);