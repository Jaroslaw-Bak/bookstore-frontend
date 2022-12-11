import styles from './SingleProduct.module.css';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

const SingleProduct = ({ allData }) => {
	const [product, setProduct] = useState('');
	const { id } = useParams();
	const { addToCart } = useContext(ShoppingCartContext);

	useEffect(() => {
		const filter = () => {
			const prod = allData && allData.filter((el) => el._id === id);
			setProduct(prod);
		};
		filter();
	}, [allData, id]);

	return (
		product && (
			<div className={styles.small__container}>
				<div className={styles.row}>
					<div className={styles.col__2}>
						<img src={product[0].image} alt='book' />
					</div>
					<div className={styles.col__2}>
						<div>
							<p className={styles.title}>{product[0].title}</p>
							<p className={styles.author}>{product[0].author}</p>
						</div>
						<div>
							<span>$40</span>
							<button
								onClick={() => addToCart(product[0])}
								className={styles.button}
							>
								Dodaj do koszyka{' '}
							</button>
						</div>
					</div>
				</div>
				<p>{product[0].description}</p>
			</div>
		)
	);
};

export default SingleProduct;
