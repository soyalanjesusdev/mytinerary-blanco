/* const ciudades = [
  { name: "Alberta", src: "../Cities12/Alberta.jpg", id: 0 },
  { name: "Buenos Aires", src: "../Cities12/Baires.jpg", id: 1 },
  { name: "Dublin", src: "../Cities12/irlanda.jpg", id: 2 },
  { name: "Jerusalen", src: "../Cities12/jerusalen.jpg", id: 3 },
  { name: "London", src: "../Cities12/londres.jpg", id: 4 },
  { name: "New York", src: "../Cities12/newyork.jpg", id: 5 },
  { name: "Amsterdam", src: "../Cities12/paisesbajos.jpg", id: 6 },
  { name: "Paris", src: "../Cities12/paris.jpg", id: 7 },
  { name: "Seoul", src: "../Cities12/seul.jpg", id: 8 },
  { name: "Sydney", src: "../Cities12/sydney.jpg", id: 9 },
  { name: "Toronto", src: "../Cities12/toronto.jpg", id: 10 },
  { name: "Dubai", src: "../Cities12/dubai.jpg", id: 11 },
  { name: "Sydney", src: "../Cities12/sydney.jpg", id: 12 },
  { name: "Bora-Bora", src: "../Cities12/bora.jpg", id: 13 },
  { name: "Tokio", src: "../Cities12/tokio.jpg", id: 14 },
]; */
const Ciudad = require("../models/Ciudad"); //importamos el modelo de ciudades
const citiesController = {
  //creamos un objeto con las funciones que vamos a usar
  getCities: (req, res) => {
    //funcion para obtener todas las ciudades
    const ciudades = Ciudad.find() //buscamos todas las ciudades
      .then((response) => res.json({ response })); //devolvemos la respuesta
  },
  getCity: (req, res) => {
    //funcion para obtener una ciudad
    const ciudad = Ciudad.findOne({ _id: req.params.id }).then((response) => {
      res.json({ response });
    });
  },
  createCity: (req, res) => {
    //funcion para crear una ciudad
    const { name, src, description } = req.body; //obtenemos los datos del body de la peticion
    const ciudad = Ciudad({ name, src, description })
      .save() //creamos una ciudad con los datos obtenidos del body
      .then((response) => res.json({ response })); //devolvemos la respuesta de la peticion del nuevo objeto
    console.log(ciudad);
  },
  modifyCity: (req, res) => {
    //funcion para modificar una ciudad

    Ciudad.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    ).then((response) => res.json({ response })); //buscamos la ciudad por id y actualizamos los datos con los nuevos que nos lleguen en el body de la peticion
  },
  deleteCity: (req, res) => {
    //funcion para eliminar una ciudad

    Ciudad.findOneAndDelete({ _id: req.params.id }).then((response) =>
      res.json({ response })
    ); //eliminamos la ciudad con el id que nos llega por parametro
  },
};

module.exports = citiesController; //exportamos el objeto
