import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Loading from '../Loading/Loading';
import { Form, Button } from 'react-bootstrap';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../../queries/queries';

const AddBook = () => {
	// Queries and Mutations GraphQL
	const { loading, error, data } = useQuery(GET_AUTHORS);
	const [AddBook, { dataMutation }] = useMutation(ADD_BOOK);

	// Form controllers
	const [formData, setFormData] = useState({
		book: '',
		genre: '',
		author: '',
	});
	const { book, genre, author } = formData;
	const clearFormData = () => {
		setFormData({
			book: '',
			genre: '',
			author: '',
		});
	};
	// Form listener
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	if (loading) return <Loading />;
	if (error) return <p>Error</p>;

	const onSubmit = (e) => {
		e.preventDefault();
		AddBook({
			variables: {
				name: book,
				genre: genre,
				authorId: author,
			},
			refetchQueries: [{ query: GET_BOOKS }],
		});
		clearFormData();
	};

	return (
		<div className='add-book-container p-5'>
			<Form onSubmit={onSubmit}>
				<Form.Group>
					<Form.Label>Book Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Book Name'
						name='book'
						value={book}
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Genre</Form.Label>
					<Form.Control
						type='text'
						placeholder='Genre'
						name='genre'
						value={genre}
						onChange={(e) => onChange(e)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Author</Form.Label>
					<Form.Control
						as='select'
						name='author'
						value={author}
						onChange={(e) => onChange(e)}
					>
						{data.authors.map((author) => (
							<option key={author.id} value={author.id}>
								{author.name}
							</option>
						))}
					</Form.Control>
				</Form.Group>
				<Button type='submit' variant='outline-primary'>
					Add Book
				</Button>
			</Form>
		</div>
	);
};

export default AddBook;
