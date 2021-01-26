const Suplementos = require('../../controllers/Suplementos')

const resolvers = {
    Query:{
        status: () => "server running", 
        findAllSuplementos: () => Suplementos.getSuplementos(),  
    },
    Mutation:{
        incluiSuplementos: (root, params,{pubsub}) => {
            return Suplementos.saveSuplementos(params).then(Suplementos => {
                pubsub.publish('PUBSUB_NOVO_SUPLEMENTOS', {
                    novoSuplementos:Suplementos
                });
                return Suplementos
            })
        },
        deletarSuplementos: (root, params,{pubsub}) => {
            return Suplementos.dellSuplementos(params).then(Suplementos => {
                pubsub.publish('PUBSUB_DELL_SUPLEMENTOS', {
                    dellSuplementos:Suplementos
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
        dellSuplementos: {
            subscribe: (_, __, { pubsub }) => {
              return pubsub.asyncIterator('PUBSUB_DELL_SUPLEMENTOS')
            },
          },

    },

}

module.exports = resolvers