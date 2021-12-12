const Activity = require("../models/Activity");

const activitiesControllers = {

    getActivitiesOfItineraryId: async(req, res)=>{
        const id = req.params.id
        try{

            let activities = await Activity.findOne({itineraryRelated:id})
            activities ? activities : activities = []
            res.json({success:true, response:activities})
        }catch(error){
            res.json({success:false, response:"Error obtaining activities"})
        }
    },
    postActivity: async(req, res)=>{
        try{
            const activity = await new Activity(req.body).save()
            res.json({success:true, response: activity})
        }catch(error){
            res.json({succes:false, response:"Error posting activities"})
        }
    },
    getAllActivities: async(req,res)=>{
        try{
            const allActivities = await Activity.find()
            // .populate("itineraryRelated")
            res.json({success:true, response:allActivities})
        }catch(error){
            res.json({success:true, response:"Error obtaining activities"})
        }
    }

}


module.exports = activitiesControllers