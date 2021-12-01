const mongoose = require("mongoose"); //importamos mongoose
const ciudadSchema = new mongoose.Schema({ //creamos el esquema de ciudades
  name: {
    type: String,
    require: true
  },
  src: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  about: {
    type: String,
    require: true
  },
});

const Ciudad = mongoose.model("Ciudad", ciudadSchema); //creamos el modelo de ciudades con el esquema creado
module.exports = Ciudad; //exportamos el modelo de ciudades