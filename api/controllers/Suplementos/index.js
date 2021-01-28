const save = require('./functions/saveSuplementos');
const findAll = require('./functions/getSuplementos');
const dell = require('./functions/dellSuplementos');

async function saveSuplementos(item) {
    return save(item)
}

async function getSuplementos() {
    return findAll()
}

async function dellSuplementos(item) {
    return dell(item)
}

module.exports =({
    saveSuplementos,
    getSuplementos,
    dellSuplementos,
})


