const mongoose = require("mongoose"); //  creamos una variable que hace referencia a mongoose
const itinerarySchema = new mongoose.Schema({ // creamos una variable que hace referencia al esquema de mongoose
  itineraryName: {type: String}, // Name of the itinerary
  name: {type: String}, 
  src: {type: String},
  price: {type: Number},
  likes: {type: Number, default: 0},
  duration: {type: Number},
  hashtags: {type: []},
  comments: {type: []},
  city: {type: mongoose.Types.ObjectId, ref: "city"},
});

const Itinerary = mongoose.model("itinerary", itinerarySchema); // creamos una variable que hace referencia al modelo de mongoose
module.exports = Itinerary; //exportamos el modelo                              