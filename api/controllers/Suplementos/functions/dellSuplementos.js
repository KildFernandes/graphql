const Suplementos = require('../../../database/models/suplementos');

async function dellSuplementos(item) {
    const suplementos = await Suplementos.deleteOne(item) 
    
}


module.exports = dellSuplementos;

 