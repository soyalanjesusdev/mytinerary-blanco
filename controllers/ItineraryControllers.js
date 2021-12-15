const Itinerary = require("../models/Itinerary"); // importamos el modelo Itinerary para poder usarlo 

const itineraryController = { // creamos un objeto itineraryController
    getItineraries:(req,res)=>{ // creamos una funcion getItineraries
        Itinerary.find() // buscamos todos los itinerarios
        .populate('city') // populamos la informacion de la ciudad
        .then((response)=> res.json({response})) // respondemos con la informacion de la ciudad
    
    },
    getItinerary: (req, res) => { // creamos una funcion getItinerary
        Itinerary.findOne({ _id: req.params.id}).then((response) => { // buscamos el itinerario por id
            res.json({response}); // respondemos con la informacion del itinerario
        });
    },
    getItinerariesByCity: (req, res) => { // creamos una funcion getItinerariesByCity
        Itinerary.find({city: {_id: req.params.city}}) // buscamos los itinerarios por ciudad
          .populate("city") // populamos la informacion de la ciudad
          .then((response) => { // respondemos con la informacion de los itinerarios
            res.json({response}) // respondemos con la informacion de los itinerarios
          })
          .catch((err) => console.log(err)) // en caso de error respondemos con el error
      },
    createItinerary: (req, res) => { // creamos una funcion createItinerary
        const {     // creamos una constante con los datos que vamos a insertar
            itineraryName,
            name,
            src,
            price,
            likes,
            duration,
            hashtags,
            comments,
            city
        } = req.body;
        new Itinerary({ // creamos un nuevo itinerario con los datos que vamos a insertar
            itineraryName,
            name,
            src,
            price,
            likes,
            duration,
            hashtags,
            comments,
            city
        })
        .save() // guardamos el itinerario
        .then((response) => res.json({response: {response}})) // respondemos con la informacion del itinerario
        .catch((err) => console.log(err)); // en caso de error respondemos con el error 
    },
    deleteItinerary: async (req, res) => { // creamos una funcion deleteItinerary
        const id = req.params; // creamos una constante con el id del itinerario
        try { // intentamos hacer lo siguiente 
            await Itinerary.findOneAndDelete({  // buscamos el itinerario por id y lo eliminamos 
                _id: id 
            });
        } catch (error) { // en caso de error respondemos con el error
            console.log(error); 
        }   // respondemos con la informacion del itinerario
        res.json({
            success: true 
        });
    },
    modifyItinerary: (req, res) => { // creamos una funcion modifyItinerary 
        Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body}) // buscamos el itinerario por id y lo actualizamos con los datos que vamos a insertar 
        .then((response) => res.json({response})) // respondemos con la informacion del itinerario
        .catch((err) => console.log(err)); // en caso de error respondemos con el error
    },

    

   
}


module.exports = itineraryController;