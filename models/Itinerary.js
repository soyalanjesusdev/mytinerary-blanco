const mongoose = require("mongoose");
const ItinerarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  itineraryName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  hashtags: {
    type: String,
    required: true,
  },
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
module.exports = Itinerary;