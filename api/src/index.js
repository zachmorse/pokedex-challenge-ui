const { ApolloServer } = require('apollo-server')
const fs = require('fs')

const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    const data = fs.readFileSync('./src/pokemon.json')
    return { pokemon: JSON.parse(data.toString()) }
  },
})

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
