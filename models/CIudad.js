const mongoose = require('mongoose');
const ciudadSchema = new mongoose.Schema({
    name: {type: String, require: true},
    src: {type: String, require: true},
    country: {type: String, require: true},
    about: {type: String, require: true},

   
    
}
)

const Ciudad = mongoose.model('Ciudad', ciudadSchema);
module.exports = Ciudad;