const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string(),
        lastName: joi.string(),
        email: joi.string().email().required().max(40).min(4).trim().pattern(new RegExp('[a-zA-A]')).messages({
            'string.empty' : "This field is required",
            'string.min' : "This field must be at least 3 characters long",
           
        }),
    
        password: joi.string().required().trim().min(8).max(40).messages({
            'string.empty' : "The password is required",
            'string.min' : "This field must be at least 8 characters long",
        }),
        
        country: joi.string(),
        photo: joi.string(),
        google: joi.boolean(),


    
        
    })
    const validation = schema.validate(req.body, {abortEarly: false})
  

    if(validation.error){
        res.json({success: false, response: validation.error.details})
    } else{
        next()

    }
}


module.exports = validator