import React from 'react';
import { GET_BOOK } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import Loading from '../Loading/Loading';

const BookDetails = ({ BookId }) => {
	const { loading, error, data } = useQuery(GET_BOOK, {
		variables: { id: BookId },
	});

	if (loading) return <Loading />;
	if (error) return <p>Error...</p>;
	const { book } = data;
	return (
		<div id='book-details'>
			<h1>Book Details:</h1>
			<h2>{book.name}</h2>
			<h2>{book.genre}</h2>
			<h3>{book.author.name}</h3>
			<h4>All books from this author: </h4>
			<ul className='other-books'>
				{book.author.books.map((book) => (
					<li key={book.id}>{book.name}</li>
				))}
			</ul>
		</div>
	);
};

export default BookDetails;
