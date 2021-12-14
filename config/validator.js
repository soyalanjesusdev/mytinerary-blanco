const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
      
        name: joi.string().trim().min(2).max(15).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            "string.empty": "Your Name is a required field",
            "string.min": "Your Name must have at least 2 characters",
            "string.max": "Your Name could have max. 15 characters",
            "string.pattern.base": "Your Name must contain only letters",
        }),
        lastName: joi.string().required().messages({
            "string.empty": "Your Name is a required field",
            "string.min": "Your Name must have at least 2 characters",
            "string.max": "Your Name could have max. 15 characters",
            "string.pattern.base": "Your Name must contain only letters",
        }),
        email: joi.string().email().min(4).trim().pattern(new RegExp('[a-zA-A]')).required().messages({
            'string.empty' : "This field is required",
            'string.min' : "This field must be at least 3 characters long"
        }),   
        password: joi.string().required().trim().messages({
            'string.empty' : "This field is required"           
        }),   
        photo: joi.string().trim(),
        country: joi.string().required().messages({
            'string.empty' : "This field is required"           
        }),   
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