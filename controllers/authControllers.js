const User = require("../models/User")
const bcryptjs =require("bcryptjs") //encripta y desencripta
const jwt = require('jsonwebtoken');

const authController = {
        signUpUser: async (req, res) => {
        const {name, lastName, email,password,photo,country,google} = req.body
                 
        try{
          const userExists = await User.findOne({email}) //user del nombre del modelo
          if(userExists){
            res.json({success:false, error:"The user is already registered", response: null})
          }else{
            const passwordHashed = bcryptjs.hashSync(password,10) //salt = string o num. 10 x defecto. num de pasos para encriptar 

            const newUser = new User(
             {name, 
              lastName, 
              email, 
              password: passwordHashed, 
              photo, 
              country,
              google
            }) 
              console.log(newUser)
              
            const token = jwt.sign({...newUser}, process.env.SECRET_KEY)
          
            await newUser.save()
            res.json({success:true, response: {token,newUser}, error: null})
          }

          }catch(error){
            res.json({success:false, response:null, error:error})
          }
        },
        readUsers : (req,res) => {
          User.find().then((response) => {
            res.json({response})
          })
        },
        signInUser: async (req,res) =>{
          const {email,password} = req.body
                 
          try {
            const userExists = await User.findOne({email})
            if(!userExists){
              res.json({success:false,response: null, error:"Email doesn't exist"})
            }else{
              let passwordSucceed = bcryptjs.compareSync(password, userExists.password)
               if(passwordSucceed){
                 
                 const token = jwt.sign({...userExists}, process.env.SECRET_KEY)                 
                  res.json({success: true, response:{name: userExists.name, lastName: userExists.lastName, email: userExists.emal, photo: userExists.photo, token:token}, error:null})//respuesta comparala con {email}
                }else{
                  res.json({success: false, response: null, error:"Password is incorrect"})
               }
            }
          }catch(error) {
            res.json({success:false,response: null, error:"Email or password doesnt exist"})
          }
        },
        token: (req, res) => {
          res.json(req.user)
        },
       
}

module.exports = authController