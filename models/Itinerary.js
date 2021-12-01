const mongoose = require("mongoose"); // MongoDB abstraction layer  (https://www.npmjs.com/package/mongoose)



const ItinerarySchema = new mongoose.Schema({
  name: { type: String, require: true },
  src: { type: String, require: true },
  country: { type: String, require: true },
  about: { type: String, require: true },
  itineraryName:{ type: String, require: true},
  userName:{ type: String, require: true},
  userImg:{ type: String, require: true},
  price:{ type: Number, require: true},
  likes: { type: Number, require: true},
  duration: { type: String, require: true},
  hashtags:{ type: String, require: true},
  comments:{ type: String, require: true},
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);
module.exports = Itinerary;
