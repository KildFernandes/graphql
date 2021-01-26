const save = require('./functions/saveSuplementos');
const findAll = require('./functions/getSuplementos');


async function saveSuplementos(item) {
    return save(item)
}

async function getSuplementos() {
    return findAll()
}

module.exports =({
    saveSuplementos,
    getSuplementos,
})


