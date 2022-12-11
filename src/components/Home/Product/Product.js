import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = ({ image, _id }) => {
	return (
		
		<div className={styles.col__5}>
			{console.log(_id)}
			<Link to={`/SingleProduct/${_id}`}>
				<img src={image} alt='book' />
			</Link>
		</div>
	);
};

export default Product;
