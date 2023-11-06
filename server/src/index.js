const { ApolloServer, gql } = require('apollo-server');

// Define  API schema
const typeDefs = gql`
	type Query {
		appName: String
	}
`;

//  Define resolvers to process the queries
const resolvers = {
	Query: {
		appName: () => 'ProductHunt clone',
	},
};

//  Create a new instance of the apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen().then(() => {
	console.log('Listening on port 4000');
});
