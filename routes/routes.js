const citiesController = require("../controllers/CitiesController"); 
const itineraryController = require("../controllers/itineraryControllers"); 
const authControllers = require("../controllers/authControllers");
const Router = require("express").Router();
const validator = require("../config/validator");
const passport = require("../config/passport");
 

Router.route("/cities") 
  .get(citiesController.getCities) 
  .post(citiesController.createCity);

Router.route("/city/:id") 
  .get(citiesController.getCity) 
  .post(citiesController.createCity)
  .delete(citiesController.deleteCity) 
  .put(citiesController.modifyCity); 


Router.route("/itinerary")
.get(itineraryController.getItineraries)
.post(itineraryController.createItinerary)

Router.route("/itinerary/:id")
.get(itineraryController.getItinerary)
.post(itineraryController.createItinerary)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.modifyItinerary);

Router.route("/itineraries/:city")
.get(itineraryController.getItinerariesByCity)

Router.route('/auth/signup').post(validator, authControllers.signUpUser).get(authControllers.readUser);
Router.route('/auth/signin').post(authControllers.signInUser)

Router.route("/auth")
.post(passport.authenticate('jwt',{ session:false}), authControllers.token)

//ruta para obtener todos los itinerarios
module.exports = Router; //exportamos el router para poder usarlo en el server.js
