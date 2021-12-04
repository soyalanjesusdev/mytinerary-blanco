const Itinerary = require("../models/Itinerary"); //asi importa el controlador

const itineraryController = {
    getItinerary: (req, res) => {
        Itinerary.find().then((response) => res.json({
            response
        }));
    },
    getItinerary: (req, res) => {
        Itinerary.findOne({
            _id: req.params.id
        }).then((response) => {
            res.json({
                response
            });
        });
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
        }).save.then((response) => res.json(response));
        console.log(itinerary);
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
    modifyItinerary: async (req, res) => {
        let id = req.params.id;
        let itinerary = req.body;
        let actualizado;
        try {
            actualizado = await Itinerary.findOneAndUpdate({
                _id: id
            }, itinerary, {
                new: true,
            });
        } catch (error) {
            console.log(error);
        }
        res.json({
            success: actualizado ? true : false
        });
    },
};

module.exports = itineraryController;