import axios from './../../axios';
import { useState } from 'react';
import styles from './AddProduct.module.css';

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
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label>
						Title
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							type='text'
							className='form-control'
							placeholder='Enter title'
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Author
						<input
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							type='text'
							className='form-control'
							placeholder='Enter author'
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Price
						<input
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							type='text'
							className='form-control'
							placeholder='Enter price'
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Category
						<select
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							className='form-control'
						>
							<option value='books'>Books</option>
							<option value='games'>Games</option>
							<option value='ebooks'>Ebooks</option>
							<option value='audiobooks'>Audiobooks</option>
						</select>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Image
						<input
							value={imgUrl}
							onChange={(e) => setImgUrl(e.target.value)}
							type='text'
							className='form-control'
							placeholder='Enter image url'
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Description
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className='form-control'
							rows='3'
						/>
					</label>
				</div>
				<div className='form-check'>
					<label className='form-check-label'>
						Bestseller
						<input
							type='checkbox'
							checked={bestseller}
							onChange={(e) => setBestseller(!bestseller)}
							className='form-check-input'
						/>
					</label>
				</div>
				<div className='form-check'>
					<label className='form-check-label'>
						Newest
						<input
							type='checkbox'
							checked={newest}
							onChange={(e) => setNewest(!newest)}
							className='form-check-input'
						/>
					</label>
				</div>
				<div className='form-check'>
					<label className='form-check-label'>
						Recomended
						<input
							type='checkbox'
							checked={recomended}
							onChange={(e) => setRecomended(!recomended)}
							className='form-check-input'
						/>
					</label>
				</div>
				<button type='submit' className='btn btn-warning'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddProduct;
