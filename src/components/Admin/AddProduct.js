import axios from './../../axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AddProduct = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [imgUrl, setImgUrl] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [newest, setNewest] = useState(false);
	const [bestseller, setBestseller] = useState(false);
	const [recomended, setRecomended] = useState(false);

	const product = {
		title,
		author,
		description,
		image: imgUrl,
		price,
		category,
		newest,
		bestseller,
		recomended,
	};

	const sendProduct = async () => {
		try {
			const response = await axios.post('/products', product);
			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('send', product);
		sendProduct();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row className='mb-3'>
				<Form.Group as={Col}>
					<Form.Label>Tytuł</Form.Label>
					<Form.Control
						value={title}
						size='sm'
						onChange={(e) => setTitle(e.target.value)}
						type='text'
						placeholder='Wpisz tytuł'
					></Form.Control>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>Autor</Form.Label>
					<Form.Control
						size='sm'
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
						type='text'
						placeholder='Wpisz autora'
					></Form.Control>
				</Form.Group>
				<Form.Group as={Col}>
					<Form.Label>Cena</Form.Label>
					<Form.Control
						size='sm'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						type='text'
						placeholder='Wpisz cenę'
					></Form.Control>
				</Form.Group>
			</Row>
			<Row className='mb-3'>
				<Col sm='4'>
					<Form.Group>
						<Form.Label>Kategoria</Form.Label>
						<Form.Select
							size='sm'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value='books'>Books</option>
							<option value='games'>Games</option>
							<option value='ebooks'>Ebooks</option>
							<option value='audiobooks'>Audiobooks</option>
						</Form.Select>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group>
						<Form.Label>Image</Form.Label>
						<Form.Control
							size='sm'
							value={imgUrl}
							onChange={(e) => setImgUrl(e.target.value)}
							type='text'
							placeholder='Enter Image Url'
						></Form.Control>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Form.Group className='mb-3'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						as='textarea'
						rows={3}
					/>
				</Form.Group>
			</Row>
			<Row className='mb-3'>
				<Form.Group className='mb-1'>
					<Form.Check
						checked={bestseller}
						onChange={(e) => setBestseller(!bestseller)}
						type='checkbox'
						label='Bestsellery'
					/>
				</Form.Group>
				<Form.Group className='mb-1'>
					<Form.Check
						checked={newest}
						onChange={(e) => setNewest(!newest)}
						type='checkbox'
						label='Nowe'
					/>
				</Form.Group>
				<Form.Group className='mb-1'>
					<Form.Check
						checked={recomended}
						onChange={(e) => setRecomended(!recomended)}
						type='checkbox'
						label='Rekomendowane'
					/>
				</Form.Group>
			</Row>
			<Button type='submit' className='btn-warning'>
				Submit form
			</Button>
		</Form>
	);
};

export default AddProduct;
