const mongoose = require('mongoose');
const ciudadSchema = new mongoose.Schema({
    name: {type: String, require: true},
    ciudad: {type: String, require: true},
    image: {type: String, require: true},

   
    
}
)

const Ciudad = mongoose.model('Ciudad', ciudadSchema);
module.exports = Ciudad;