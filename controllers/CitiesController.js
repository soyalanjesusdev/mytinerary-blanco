const City = require("../models/City"); //importamos el modelo de ciudades


const citiesController = {
  getCities: (req, res) => {
    City.find() 
      .then((response) => res.json({response})); 
  },
  getCity: (req, res) => {
   City.findOne({_id: req.params.id}).then((response) => {
      res.json({response});
    });
  },
  createCity: (req, res) => {
    const {name, src, about, country } = req.body; //obtenemos los datos del body de la peticion
    const city = new City({name, src, about, country}).save()  //creamos una nueva ciudad con los datos obtenidos
      .then((response) => res.json({response:{city}})); //devolvemos la respuesta con la ciudad creada
      console.log(city);
      },
  
  modifyCity: async (req,res) =>{ // creamos una funcion asincrona para modificar una ciudad 
      let id = req.params.id //obtenemos el id de la ciudad a modificar
      let city = req.body //obtenemos los datos de la ciudad a modificar 
      let actualizado   //creamos una variable para guardar la ciudad actualizada
      try{ //creamos un try catch para capturar errores
        actualizado = await City.findOneAndUpdate({_id:id}, city, {new:true}) //buscamos la ciudad a modificar y actualizamos los datos con los nuevos
      }catch(error){
        console.log(error) //en caso de error mostramos el error
      }
      res.json({success:actualizado ? true : false}) //devolvemos una respuesta con el resultado de la operacion 
    },

  
  deleteCity:  async (req, res) => { // creamos una funcion
    const id = req.params.id //obtenemos el id de la ciudad a eliminar
      try{ //creamos un try catch para capturar errores
        await City.findOneAndDelete({_id:id}) //buscamos la ciudad a eliminar
      }catch(error){ //en caso de error mostramos el error
        console.log(error) 
      }
      res.json({success:true}) //devolvemos una respuesta con el resultado de la operacion

  },

}


module.exports = citiesController; //exportamos el objeto del controlador 