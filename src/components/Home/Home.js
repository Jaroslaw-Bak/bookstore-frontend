import styles from './Home.module.css';
import book from '../../assets/book.jpg';
import { useEffect, useState } from 'react';
import Product from './Product/Product';

const Home = ({ allData }) => {
	const [newest, setNewest] = useState('');
	const [bestseller, setBestseller] = useState('');
	const [recomended, setRecomended] = useState('');

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
			<div className={styles.home__baner}>
				<div className={`${styles.home__baner__element} + ${styles.home__baner__left}`}>
					<h1>Ksiązka tygodnia</h1>
					<span>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting
					</span>
				</div>
				<div className={`${styles.home__baner__element} + ${styles.home__baner__right}`}>
					<img src={book} alt='book' />
				</div>
			</div>

			<div className={styles.small__container}>
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
