const User = require("../models/User") // Import User Model
const bcryptjs =require("bcryptjs") //encripta y desencripta
const jwt = require('jsonwebtoken'); //crea y valida el token

const authController = { 
        signUpUser: async (req, res) => { // creamos una funcion para registrar un usuario
        const {name, lastName, email,password,photo,country,google} = req.body
      
        try{
          const userExists = await User.findOne({email}) //user del nombre del modelo
          if(userExists){
            res.json({success:false, error:"The user is already registered", response: null}) //si el usuario ya existe
          }else{
            const passwordHashed = bcryptjs.hashSync(password,10) //salt = string o num. 10 x defecto. num de pasos para encriptar 
            const newUser = new User( //creamos un nuevo usuario
            {name, 
              lastName, 
              email, 
              password: passwordHashed, 
              photo, 
              country,
              google
            }) 
              console.log(newUser) //imprimimos el nuevo usuario
              
            const token = jwt.sign({...newUser}, process.env.SECRET_KEY) //creamos el token
          
            await newUser.save() //guardamos el usuario
            res.json({success:true, response: {token,newUser}, error: null}) //si el usuario no existe
          }

          }catch(error){ //si hay un error
            res.json({success:false, response:null, error:error}) //si hay un error en el registro de usuario 
          }
        },
        readUsers : (req,res) => { //funcion para leer todos los usuarios 
          User.find().then((response) => {
            res.json({response})
          })
        },
        signInUser: async (req,res) =>{ //funcion para loguearse 
          const {email,password} = req.body
                 
          try {
            const userExists = await User.findOne({email}) //buscamos el usuario
            if(!userExists){
              res.json({success:false,response: null, error:"Email doesn't exist"}) //si el usuario no existe
            }else{
              let passwordSucceed = bcryptjs.compareSync(password, userExists.password) //comparamos la contraseña
               if(passwordSucceed){ //si la contraseña es correcta
                 
                 const token = jwt.sign({...userExists}, process.env.SECRET_KEY)  //creamos el token                
                  res.json({success: true, response:{name: userExists.name, lastName: userExists.lastName, email: userExists.emal, photo: userExists.photo, token:token}, error:null})//respuesta comparala con {email}
                }else{
                  res.json({success: false, response: null, error:"Password is incorrect"}) //si la contraseña es incorrecta
               }
            }
          }catch(error) { //si hay un error
            res.json({success:false,response: null, error:"Email or password doesnt exist"})  //si hay un error en el login
          }
        },
        token: (req, res) => { // creamos una funcion para validar el token 
          res.json(req.user) 
        },
       
}

module.exports = authController