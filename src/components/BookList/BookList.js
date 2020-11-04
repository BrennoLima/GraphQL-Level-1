import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Loading from '../Loading/Loading';
import { GET_BOOKS } from '../../queries/queries';
import BookDetails from '../BookDetails/BookDetails';

const BookList = () => {
	const { loading, error, data } = useQuery(GET_BOOKS);
	const [BookId, setBookId] = useState(null);

	if (loading) return <Loading />;
	if (error) return <p>Errors...</p>;

	return (
		<div>
			<ul id='book-list'>
				{data.books.map((book) => (
					<li key={book.id} onClick={() => setBookId(book.id)}>
						{book.name}
					</li>
				))}
			</ul>
			{BookId ? (
				<BookDetails BookId={BookId} />
			) : (
				<p id='info'>Select a book for more info</p>
			)}
		</div>
	);
};
export default BookList;
