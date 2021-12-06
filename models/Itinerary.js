const mongoose = require("mongoose");
const itinerarySchema = new mongoose.Schema({
  itineraryName: {type: String},
  name: {type: String},
  src: {type: String},
  price: {type: Number},
  likes: {type: Number, default: 0},
  duration: {type: Number},
  hashtags: {type: []},
  comments: {type: []},
  city: {type: mongoose.Types.ObjectId, ref: "city"},
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);
module.exports = Itinerary;