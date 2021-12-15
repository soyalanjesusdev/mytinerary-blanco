const joi = require("joi")

const validator = (req, res, next) => { //creamos una funcion para validar el token
    const schema = joi.object({ //creamos un objeto con una estructura
      
        name: joi.string().trim().min(2).max(15).required().pattern(new RegExp('[a-zA-Z]$')).messages({ //validamos el nombre
            "string.empty": "Your Name is a required field", 
            "string.min": "Your Name must have at least 2 characters",
            "string.max": "Your Name could have max. 15 characters",
            "string.pattern.base": "Your Name must contain only letters",
        }),
        lastName: joi.string().required().messages({ //validamos el apellido 
            "string.empty": "Your Name is a required field",
            "string.min": "Your Name must have at least 2 characters",
            "string.max": "Your Name could have max. 15 characters",
            "string.pattern.base": "Your Name must contain only letters",
        }),
        email: joi.string().email().min(4).trim().pattern(new RegExp('[a-zA-A]')).required().messages({ //validamos el email
            'string.empty' : "This field is required",
            'string.min' : "This field must be at least 3 characters long"
        }),   
        password: joi.string().required().trim().messages({ //validamos el apellido
            'string.empty' : "This field is required"           
        }),   
        photo: joi.string().trim(), //validamos la foto
        country: joi.string().required().messages({ //validamos el pais
            'string.empty' : "This field is required"           
        }),   
        google: joi.boolean(), //validamos el google
        
             
    })
    const validation = schema.validate(req.body, {abortEarly: false}) //validamos el objeto
  

    if(validation.error){ //si hay un error en la validacion 
        res.json({success: false, response: validation.error.details})
    } else{
        next()

    }
}


module.exports = validator