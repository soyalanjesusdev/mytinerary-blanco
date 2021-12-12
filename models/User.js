const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    image:{type:String, required:true},
    imageUrl:{type:String, required:true},
    password:{type:String, required:true},
    country:{type:String, required:true},
    googleUser:{type:Boolean, default:false},
    itinerariesLiked:[{type:mongoose.Types.ObjectId}]
})

const User = mongoose.model('user',userSchema)

module.exports = User