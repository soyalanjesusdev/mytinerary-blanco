const Commentary = require("../models/Commentary"); // importamos el modelo Itinerary para poder usarlo  falta el modelo de cometary

const commentaryController = { // creamos un objeto itineraryController
    getComments: async(req, res)=>{

        try{
            const itineraryId = req.params.id
            let itinerary = await Commentary.findOne({_id:itineraryId}).populate("comments.user")
            const comments = itinerary.comments.map(comment => ({comment:{text:comment.comment, _id:comment._id}, user:{firstName:comment.user.firstName, image:comment.user.image, lastName: comment.user.lastName, userId:comment.user._id}}))
            res.json({success:true, response:comments})
        }catch(error){
            res.json({success:false, response:[{comment:"Error"}]})
        }
    },
    postComment: async(req, res)=>{  // Create a new comment
        try{
            const {comment, itineraryId} = req.body
            const userId = req.user._id
            const itinerary = await Commentary.findOne({_id:itineraryId})
            itinerary.comments.push({comment, user:userId})
            await itinerary.save()
            res.json({success:true, response:itinerary.comments})
        }catch(error){
            res.json({success:false, response:[{comment:"Error"}]})
        }
    }

}


module.exports = commentaryController