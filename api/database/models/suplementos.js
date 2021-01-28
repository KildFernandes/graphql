const mongoose = require('../../config/database');

const SuplementosSchema = new mongoose.Schema({
    produto:{
        type: String, 
        required: true
    }, 
    valor:{
        type: Number, 
        required:true,
    },
    status : {
        type: String,
        required: true, 
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Suplementos = mongoose.model('Suplementos', SuplementosSchema);

module.exports = Suplementos;