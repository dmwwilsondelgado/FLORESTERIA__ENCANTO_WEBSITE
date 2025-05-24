//const express = require('express'); 
//const bodyParser = require('body-parser');



//app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: true }));
//const app = express();
//app.use(express.json());

const express = require('express');
const app = express();
app.use(express.json());

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