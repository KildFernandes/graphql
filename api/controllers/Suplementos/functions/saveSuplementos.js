const Suplementos = require('../../../database/models/suplementos');

async function saveSuplementos(item) {
    return Suplementos.create(item)
}

module.exports = saveSuplementos;

 