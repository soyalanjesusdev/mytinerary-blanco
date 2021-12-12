const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
    activities:{
        firstActivity:{type:{title:{type:String, required:true}, image:{type:String, required:true}}, required:true},
        secondActivity:{type:{title:{type:String, required:true}, image:{type:String, required:true}}, required:true},
        thirdActivity:{type:{title:{type:String, required:true}, image:{type:String, required:true}}, required:true},
    },
    itineraryRelated:{type: mongoose.Types.ObjectId, ref:"itinerary", required:true}

})

const Activity = mongoose.model("activity",activitySchema)

module.exports = Activity