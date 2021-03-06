const citiesController = require("../controllers/CitiesController"); 
const itineraryController = require("../controllers/itineraryControllers"); 
const authControllers = require("../controllers/AuthControllers");
const activityControllers = require("../controllers/ActivityControllers")
const likesController = require("../controllers/likesController")
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

Router.route('/activities')
.post(activityControllers.postActivity)
.get(activityControllers.returnActivities)

Router.route('/activities/:id')
.get(activityControllers.returnActivity)
.post(activityControllers.postActivity)
.put(activityControllers.modifyActivity)
.delete(activityControllers.deleteActivity)

Router.route("/activity/:itinerary")
.get(activityControllers.returnActivitiesByItinerary)

Router.route("/like")
.put(likesController.like)

Router.route("/comments")
.get(itineraryController.getComments)
.post(itineraryController.postComment)
.put(itineraryController.editComment)
.delete(itineraryController.deleteComment)
//ruta para obtener todos los itinerarios
module.exports = Router; //exportamos el router para poder usarlo en el server.js
