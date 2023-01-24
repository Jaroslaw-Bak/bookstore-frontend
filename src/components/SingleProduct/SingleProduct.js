import styles from './SingleProduct.module.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import axios from './../../axios';

const SingleProduct = () => {
	const [product, setProduct] = useState('');
	const { id } = useParams();
	const { addToCart } = useContext(ShoppingCartContext);

	async function getData() {
		try {
			const response = await axios.get(`/products/${id}`);
			console.log(response.data.data.product);
			setProduct(response.data.data.product);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getData();
	});

	return (
		product && (
			<div className={styles.small__container}>
				<div className={styles.row}>
					<div className={styles.col__2}>
						<img src={product.image} alt='book' />
					</div>
					<div className={styles.col__2}>
						<div>
							<p className={styles.title}>{product.title}</p>
							<p className={styles.author}>{product.author}</p>
						</div>
						<div>
							<span className={styles.price}>{product.price} zł</span>
							<button onClick={() => addToCart(product)} className='btn btn-primary'>
								Dodaj do koszyka{' '}
							</button>
						</div>
					</div>
				</div>
				<p className={styles.description}>{product.description}</p>
			</div>
		)
	);
};

export default SingleProduct;

