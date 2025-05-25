import express from 'express';
import usuariosRoutes from './src/routes/usuariosRouter.js';

const app = express();
app.use(express.json());

// si voy a recibir formulario activo 
app.use(express.urlencoded({ extended: true })); // sin esto naaa 

app.use('/usuarios', usuariosRoutes); 
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