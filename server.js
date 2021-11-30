require("dotenv").config();
const express = require("express");
const cors = require("cors"); //importamos cors
const Router = require("./routes/routes");
require("./config/dabase");
const app = express(); //creamos la aplicacion

app.use(cors()); //usamos cors
app.use(express.json()); //usamos express.json
app.use("/api", Router); //usamos la ruta /api

app.listen(4000, () => {
  console.log("Hello Server is running on port 4000");
}); //escuchamos en el puerto 4000
