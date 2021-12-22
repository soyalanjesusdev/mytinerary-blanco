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
    getComments: async (req, res) => {
        try {
          let commentList = await Comment.find({
            itinerary: req.body.itinerary,
          }).populate({ path: "user", select: ["name", "email", "photo"] });
          res.json({ success: true, error: null, response: commentList });
        } catch (e) {
          res.json({ success: false, error: e, response: null });
        }
      },
      postComment: async (req, res) => {
        const { user, itinerary, message } = req.body;
        try {
          await new Comment({ user, itinerary, message }).save();
          res.json({
            success: true,
            response: "Uploaded comment with message: " + message,
            error: null,
          });
        } catch (e) {
          res.json({ success: false, error: e, response: null });
          console.error(e);
        }
      },
    editComment: async (req, res) => {
        try {
          //si no tengo new true findone devuelve la lista no editada. true me duvuevle la editada, sin true la pasa y dps la edita
          let commentEdit = await Comment.findOneAndUpdate({ _id: req.body.id }, { message: req.body.message}, {new:true});
          res.json({
            success: true,
            response:commentEdit
          });
        } catch (e) {
          res.json({ success: false, error: e });
          console.error(e);
        }
      },
      deleteComment: async (req, res) => {
        try {
          await Comment.findOneAndDelete({ _id: req.body.id });
          res.json({
            success: true,
            response: "Deleted comment with id" + req.body.id,
          });
        } catch (e) {
          res.json({ success: false, error: e });
          console.error(e);
        }
      },

    
    

   
}


module.exports = itineraryController;