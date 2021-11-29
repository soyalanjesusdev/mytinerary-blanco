const citiesController = require('../controllers/CitiesController');


const Router = require('express').Router();

Router.route('/ciudades')
    .get(citiesController.getCities)
    .post(citiesController.createCity)

    Router.route('/ciudad/:id')
    .get(citiesController.getCity)


module.exports = Router;