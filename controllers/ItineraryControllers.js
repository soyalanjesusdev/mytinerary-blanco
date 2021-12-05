const Itinerary = require("../models/Itinerary"); //asi importa el controlador

const itineraryController = {
    getItinerary: (req, res) => {
        Itinerary.find()
        .populate('City')
        .then((response) => res.json({response}));
    },
    getItinerary: (req, res) => {
        Itinerary.findOne({ _id: req.params.id}).then((response) => {
            res.json({response});
        });
    },
    getItineraryByCity: (req, res) => {
        Itinerary.find({ City:{ _id: req.params.id}})
        .populate('City')
        .then((response) => {
            res.json({response})
        })
        .catch((err) => console.log(err))

    },
    createItinerary: (req, res) => {
        const {
            itineraryName,
            userName,
            userImg,
            price,
            likes,
            duration,
            hashtags,
            comments,
        } = req.body;
        const itinerary = new Itinerary({
            itineraryName,
            userName,
            userImg,
            price,
            likes,
            duration,
            hashtags,
            comments,
            city,
        })
        .save()
        .then((response) => res.json({response: {itinerary}}))
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