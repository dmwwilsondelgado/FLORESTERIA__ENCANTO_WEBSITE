import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000, () => {
    console.log("Inicializando Proyecto ");    
});
