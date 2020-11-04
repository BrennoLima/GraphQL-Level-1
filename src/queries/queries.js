import { gql } from '@apollo/client';

const GET_AUTHORS = gql`
	query GetAuthors {
		authors {
			name
			id
		}
	}
`;

const GET_BOOKS = gql`
	query GetBooks {
		books {
			name
			genre
			id
		}
	}
`;

export const GET_BOOK = gql`
	query GetBook($id: ID) {
		book(id: $id) {
			name
			genre
			id
			author {
				id
				name
				age
				books {
					name
					id
				}
			}
		}
	}
`;

const ADD_BOOK = gql`
	mutation($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			id
		}
	}
`;

export { GET_AUTHORS, GET_BOOKS, ADD_BOOK };
