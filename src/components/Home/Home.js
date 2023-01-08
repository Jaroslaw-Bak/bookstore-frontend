import styles from './Home.module.css';
import book from '../../assets/book.jpg';
import { useEffect, useState } from 'react';
import Product from './Product/Product';
import axios from './../../axios';

const Home = () => {
	const [allData, setData] = useState(null);
	const [newest, setNewest] = useState('');
	const [bestseller, setBestseller] = useState('');
	const [recomended, setRecomended] = useState('');

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
			const newestData =
				allData && allData.filter((el) => el.newest === true).slice(-5);
			setNewest(newestData);
			const bestsellerData =
				allData && allData.filter((el) => el.bestseller === true).slice(-5);
			setBestseller(bestsellerData);
			const recomendedData =
				allData && allData.filter((el) => el.recomended === true).slice(-5);
			setRecomended(recomendedData);
		};
		filterData();
	}, [allData]);

	return (
		<div className={styles.home}>
			<div className={styles.small__container}>
				<div className={styles.home__baner}>
					<div
						className={`${styles.home__baner__element} + ${styles.home__baner__left}`}
					>
						<h1>Książka tygodnia</h1>
						<span className={styles.home__baner__description}>
							Światowa sensacja, bijący wszelkie rekordy fenomen, który przykuł uwagę
							ponad 13 milionów czytelników.
							„Gdzie śpiewają raki” to wysmakowana oda do świata przyrody, wzruszająca fabuła o dojrzewaniu i zaskakująca relacja z procesu.
						</span>
					</div>
					<div
						className={`${styles.home__baner__element} + ${styles.home__baner__right}`}
					>
						<img src={book} alt='book' />
					</div>
				</div>

				<h2>Nowości</h2>
				<div className={styles.row}>
					{console.log(newest)}
					{newest ? (
						newest.map((el) => <Product key={el._id} {...el} />)
					) : (
						<p>loading</p>
					)}
				</div>

				<h2>Bestsellery</h2>
				<div className={styles.row}>
					{bestseller ? (
						bestseller.map((el) => <Product key={el._id} {...el} />)
					) : (
						<p>loading</p>
					)}
				</div>

				<h2>Polecane</h2>
				<div className={styles.row}>
					{recomended ? (
						recomended.map((el) => <Product key={el._id} {...el} />)
					) : (
						<p>loading</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
