const citiesController = require("../controllers/CitiesController"); //require de CitiesController para usar las funciones de este controlador

const Router = require("express").Router(); //importamos el router de express para poder usar las rutas de express

Router.route("/ciudades") //ruta para obtener todas las ciudades
  .get(citiesController.getCities) //llamamos a la funcion getCities de citiesController  para obtener todas las ciudades
  .post(citiesController.createCity); //llamamos a la funcion createCity de citiesController para crear una ciudad

Router.route("/ciudad/:id") //ruta para obtener una ciudad
  .get(citiesController.getCity) //llamamos a la funcion getCity de citiesController para obtener una ciudad
  .delete(citiesController.deleteCity) //llamamos a la funcion deleteCity de citiesController para eliminar una ciudad
  .put(citiesController.modifyCity); //llamamos a la funcion modifyCity de citiesController para modificar una ciudad

module.exports = Router; //exportamos el router para poder usarlo en el server.js
