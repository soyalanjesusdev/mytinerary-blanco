const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    country:{type:String, required:true},
    photo:{type:String, required:true},
    google:{type:Boolean, default:false},
})

const User = mongoose.model('user',userSchema)

module.exports = User