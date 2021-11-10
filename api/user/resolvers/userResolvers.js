const userResolvers = {
    Query: {
        users: (root, args, { dataSources }, info) => dataSources.usersAPI.getUsers(),
        user: (root, { id }, { dataSources }, info ) => dataSources.usersAPI.getUserById(id)
    },
    Mutation:{
        adicionaUser: async (root, user, { dataSources }, info) => dataSources.usersAPI.adicionaUser(user),
        atualizaUser: async (root, novosDados, { dataSources }, info) => dataSources.usersAPI.atualizaUser(novosDados),
        deletaUser: async (root, { id }, { dataSources }, info) => dataSources.usersAPI.deletaUser(id)
    }

}

module.exports = userResolvers