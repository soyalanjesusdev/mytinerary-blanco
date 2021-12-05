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
    const city = new City({name, src, about, country}).save() 
      .then((response) => res.json({response:{city}})); //devolvemos la respuesta
      console.log(city);
      },
  
  modifyCity: async (req,res) =>{
      let id = req.params.id
      let city = req.body
      let actualizado
      try{
        actualizado = await City.findOneAndUpdate({_id:id}, city, {new:true})
      }catch(error){
        console.log(error)
      }
      res.json({success:actualizado ? true : false})
    },

  
  deleteCity:  async (req, res) => {
    const id = req.params.id
      try{
        await City.findOneAndDelete({_id:id})
      }catch(error){
        console.log(error)
      }
      res.json({success:true})

  },

}


module.exports = citiesController; //exportamos el objeto