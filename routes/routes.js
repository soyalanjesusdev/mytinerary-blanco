const citiesController = require("../controllers/CitiesController"); 
const itineraryController = require("../controllers/itineraryControllers"); 
const authControllers = require("../controllers/authControllers");
const validator = require("../config/validator");
const passport = require("../config/passport");
const Router = require("express").Router();
 

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

Router.route("/auth/signup")
.get(authControllers.readUsers)
.post(validator, authControllers.signUpUser)


Router.route("/auth/signin")
.post( authControllers.signInUser) 

Router.route("/auth")
.get(passport.authenticate("jwt", {session: false}), authControllers.token)
//chequea el token y si esta todo bien pasa a la accion: loguearse.


//ruta para obtener todos los itinerarios
module.exports = Router; //exportamos el router para poder usarlo en el server.js
