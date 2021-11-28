

const Router = require('./routes/routes');
const express = require("express");
const cors = require("cors"); //importamos cors
const app = express(); //creamos la aplicacion


app.use(cors()); //usamos cors
app.use(express.json()); //usamos express.json
app.use("/api", Router);


app.listen(4000, () => {
  console.log("Hello Server is running on port 4000");
}); //escuchamos en el puerto 4000
