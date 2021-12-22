const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    title:{type:String, required:true}, 
    image:{type:String, required:true},
    itinerary:{type: mongoose.Types.ObjectId, ref:"itinerary", required:true}
})

const Activity = mongoose.model("activity",activitySchema)

module.exports = Activity