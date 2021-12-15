const Activity = require("../models/Activity");

const activitiesControllers = {
    gettodaslasactividades: async(req,res)=>{
        try{
            const todaslasactividades = await Activity.find()
          
            res.json({success:true, response:todaslasactividades})
        }catch(error){
            res.json({success:true, response:"Error Not found activities"})
        }
    }

}


module.exports = activitiesControllers