const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt
const User = require("../models/User")

module.exports = passport.use(new jwtStrategy( //creamos una nueva estrategia
    {jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(), //extraemos el token del header
      secretOrKey: process.env.SECRET_KEY, //clave secreta
    },(jwt_payload, done) => { //funcion para validar el token

      User.findOne({_id:jwt_payload._doc._id}) //buscamos el usuario
        .then((user) => { //si el usuario existe

          if (user) { //si el usuario existe
            return done(null, user) //devolvemos el usuario
          } else {  //si el usuario no existe
            return done(null, false)  //devolvemos false
          }
        })
        .catch((err) => {   //si hay un error
          return done(err, false) //devolvemos un error
        })
    }))