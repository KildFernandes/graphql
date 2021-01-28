const Suplementos = require('../../../database/models/suplementos');

async function dellSuplementos(item) {
    /*const suplementos = await Suplementos.deleteOne(item)*/ 
    return Suplementos.deleteOne(item).then(() => item)
}


module.exports = dellSuplementos;

 