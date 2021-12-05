const mongoose = require("mongoose"); //importamos mongoose
const citySchema = new mongoose.Schema({ //creamos el esquema de ciudades
  name: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
});


const City = mongoose.model("City", citySchema); //creamos el modelo de ciudades con el esquema creado
module.exports = City; //exportamos el modelo de ciudades