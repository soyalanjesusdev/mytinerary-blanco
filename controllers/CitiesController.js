const City = require("../models/City"); //importamos el modelo de ciudades
const citiesController = {
  //creamos un objeto con las funciones que vamos a usar
  getCities: (req, res) => {
    //funcion para obtener todas las ciudades
    const cities = City.find() //buscamos todas las ciudades
      .then((response) => res.json({
        response
      })); //devolvemos la respuesta
  },
  getCity: (req, res) => {
    //funcion para obtener una ciudad
    const city = City.findOne({
      _id: req.params.id
    }).then((response) => {
      res.json({
        response
      });
    });
  },
  createCity: (req, res) => {
    //funcion para crear una ciudad
    const {
      name,
      src,
      description
    } = req.body; //obtenemos los datos del body de la peticion
    const city = City({
        name,
        src,
        description
      })
      .save() //creamos una ciudad con los datos obtenidos del body
      .then((response) => res.json({
        response
      })); //devolvemos la respuesta de la peticion del nuevo objeto
    console.log(city);
  },
  modifyCity: (req, res) => {
    //funcion para modificar una ciudad

    City.findOneAndUpdate({
      _id: req.params.id
    }, {
      ...req.body
    }, {
      new: true
    }).then((response) => res.json({
      response
    })); //buscamos la ciudad por id y actualizamos los datos con los nuevos que nos lleguen en el body de la peticion
  },
  deleteCity: (req, res) => {
    //funcion para eliminar una ciudad

    City.findOneAndDelete({
      _id: req.params.id
    }).then((response) =>
      res.json({
        response
      })
    ); //eliminamos la ciudad con el id que nos llega por parametro
  },
};

module.exports = citiesController; //exportamos el objeto