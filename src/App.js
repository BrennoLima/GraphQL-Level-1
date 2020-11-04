import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Components
import BookList from './components/BookList/BookList';
import AddBook from './components/AddBook/AddBook';

// Apollo Setup
const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
	cache: new InMemoryCache(),
	connectToDevTools: true,
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div id='main'>
				<h1>Ninja's Reading List</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
};

export default App;
