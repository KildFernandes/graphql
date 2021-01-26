const Suplementos = require('../../controllers/Suplementos')

const resolvers = {
    Query:{
        status: () => "server running", 
        findAllSuplementos: () => Suplementos.getSuplementos(),  
    },
    Mutation:{
        realizarSuplementos: (root, params,{pubsub}) => {
            return Suplementos.saveSuplementos(params).then(Suplementos => {
                pubsub.publish('PUBSUB_NOVO_SUPLEMENTOS', {
                    novoSuplementos:Suplementos
                });
                return Suplementos
            })
        },

    },
    Subscription: {
        novoSuplementos: {
          subscribe: (_, __, { pubsub }) => {
            return pubsub.asyncIterator('PUBSUB_NOVO_SUPLEMENTOS')
          },
        },

    }
}

module.exports = resolvers