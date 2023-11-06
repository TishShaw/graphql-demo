const { ApolloServer, gql } = require('apollo-server');
const { readSchema } = require('./schema');
const { resolvers } = require('./resolvers.js');

const typeDefs = readSchema();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(() => {
	console.log('Listening on port 4000');
});
