import { ApolloClient, InMemoryCache } from '@apollo/client';

const headers = {
	'x-hasura-public-secret-key': `${process.env.REACT_APP_API_KEY}`,
	'Hasura-Client-Name': 'Swimify Admin Dashboard'
};

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_HASURA_URL}`,
	headers: headers,
    cache: new InMemoryCache(),
});

export default client;