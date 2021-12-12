const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
        name: joi.string(),
        lastName: joi.string(),
        email: joi.string().required().max(12).min(4).trim().pattern(new RegExp('[a-zA-A]')).messages({
            'string.empty' : "This field is required",
            'string.min' : "This field must be at least 3 characters long",
        }),
    
        password: joi.string().required().trim().min(8).max(12).messages({
            'string.empty' : "The password is required",
            'string.min' : "This field must be at least 8 characters long",
    
        }),
        
        photo: joi.string(),
        country: joi.string(),


    
        
    })
    const validation = schema.validate(req.body, {abortEarly: false})
  

    if(validation.error){
      console.log(validation.error.details)
     return res.json({success: validation.error})
    }
    next()
}


module.exports = validator