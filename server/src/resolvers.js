const productsData = [
	{
		name: 'Educative',
		description: 'Interactive Courses for Software Developers',
		url: 'https://educative.io/',
		numberOfVotes: 10,
		publishedAt: '2021-04-05',
		// Reference to "ellen"
		authorId: '1',
	},
	{
		name: 'Apollo',
		description: 'The Apollo Data Graph Platform',
		url: 'https://www.apollographql.com/',
		numberOfVotes: 5,
		publishedAt: '2021-01-08',
		// Reference to "peter"
		authorId: '2',
	},
	{
		name: 'OneGraph',
		description: 'Build Integrations 100x Faster',
		url: 'https://www.onegraph.com',
		numberOfVotes: 5,
		publishedAt: '2020-08-22',
		// Reference to "ellen"
		authorId: '1',
	},
];
const usersData = [
	{
		id: '1',
		userName: 'ellen',
		fullName: 'Ellen James',
	},
	{
		id: '2',
		userName: 'peter',
		fullName: 'Peter Miles',
	},
];

const resolvers = {
	Query: {
		appName: () => 'ProductHunt clone',
		allProducts: () => {
			return productsData;
		},
		productsByAuthor: (_, args) => {
			const user = usersData.find((user) => user.userName === args.authorName);
			return productsData.filter((product) => product.authorId === user.id);
		},
	},
	Product: {
		author: (product) => {
			return usersData.find((user) => user.id === product.authorId);
		},
	},
	// User: {
	// 	organization: (user) => {
	// 		// get an organization for a user
	// 	},
	// },
};

module.exports = {
	resolvers,
};
