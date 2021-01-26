const Suplementos = require('../../../database/models/suplementos');

async function getSuplementos() {
    const suplementos = await Suplementos.find() 
    return suplementos
    
}

module.exports = getSuplementos;

