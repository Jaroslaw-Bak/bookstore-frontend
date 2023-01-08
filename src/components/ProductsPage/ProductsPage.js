import styles from './ProductsPage.module.css';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from './../../axios';

const ProductsPage = () => {
	const [data, setData] = useState(null);
	const [categoryData, setCategoryData] = useState(null);
	const { category } = useParams();

	async function getData() {
		try {
			const response = await axios.get('/products');
			console.log(response.data.data.products);
			setData(response.data.data.products);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		const filterData = () => {
			const filteredData = data && data.filter((el) => el.category === category);
			console.log(filteredData);
			setCategoryData(filteredData);
		};
		filterData();
	}, [data, category]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.small__container}>
				<div className={styles.row}>
					{categoryData &&
						categoryData.map((el) => (
							<Link  styles={{'text-decoration': 'none'}}to={`/SingleProduct/${el._id}`}>
								<div className={styles.product}>
									<img src={el.image} alt='' />
									<div className={styles.product__description}>
										<p className={styles.product__title}>{el.title}</p>
										<p className={styles.product__author}>{el.author}</p>
										<p className={styles.product__price}>{el.price} zł</p>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
