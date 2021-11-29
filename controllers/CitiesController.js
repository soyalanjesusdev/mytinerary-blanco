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
const Ciudad = require("../models/Ciudad");
const citiesController = {
    getCities:(req,res)=>{
    const ciudades = Ciudad.find()
    .then((response)=> res.json({response}))
  },
  getCity:(req,res)=>{
    const ciudad = Ciudad.findOne({_id: req.params.id})
        .then((response) =>{res.json({response})
})  
  },
  createCity:(req,res)=>{
    const {name, src, description}= req.body
    const ciudad = Ciudad({name, src, description}).save()
    .then((response)=> res.json({response}))
    console.log(ciudad)
  }
}

module.exports = citiesController;
