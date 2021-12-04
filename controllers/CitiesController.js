const City = require("../models/City"); //importamos el modelo de ciudades
const citiesController = {

  getCities: (req, res) => {
    
    City.find() 
    .populate("itinerary")//buscamos todas las ciudades
      .then((response) => res.json({
        response
      })); //devolvemos la respuesta
  },
  getCity: (req, res) => {
    //funcion para obtener una ciudad
    City.findOne({
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
      about,
    } = req.body; //obtenemos los datos del body de la peticion
    const city = City({
        name,
        src,
        about,
      })
      .save() 
      .then((response) => res.json({
        response
      }));
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
    }));
  },
  deleteCity: (req, res) => {
    

    City.findOneAndDelete({
      _id: req.params.id
    }).then((response) =>
      res.json({
        response
      })
    ); 
  },
};

module.exports = citiesController; //exportamos el objeto