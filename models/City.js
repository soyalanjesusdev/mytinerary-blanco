const mongoose = require("mongoose"); //importamos mongoose
const citySchema = new mongoose.Schema({ //creamos el esquema de ciudades
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

const City = mongoose.model("City", citySchema); //creamos el modelo de ciudades con el esquema creado
module.exports = City; //exportamos el modelo de ciudades