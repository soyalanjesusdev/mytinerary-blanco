const Itinerary = require("../models/Itinerary"); //asi importa el controlador

const itineraryController = {
    getItineraries:(req,res)=>{
        Itinerary.find()
        .populate('city')
        .then((response)=> res.json({response}))
    
    },
    getItinerary: (req, res) => {
        Itinerary.findOne({ _id: req.params.id}).then((response) => {
            res.json({response});
        });
    },
    getItinerariesByCity: (req, res) => {
        Itinerary.find({city: {_id: req.params.city}})
          .populate("city")
          .then((response) => {
            res.json({response})
          })
          .catch((err) => console.log(err))
      },
    createItinerary: (req, res) => {
        const {
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
        new Itinerary({
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
        .save()
        .then((response) => res.json({response: {response}}))
        .catch((err) => console.log(err));
    },
    deleteItinerary: async (req, res) => {
        const id = req.params;
        try {
            await Itinerary.findOneAndDelete({
                _id: id
            });
        } catch (error) {
            console.log(error);
        }
        res.json({
            success: true
        });
    },
    modifyItinerary: (req, res) => {
        Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body})
        .then((response) => res.json({response}))
        .catch((err) => console.log(err));
    },
}


module.exports = itineraryController;