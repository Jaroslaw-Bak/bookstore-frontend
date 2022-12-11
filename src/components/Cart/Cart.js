import styles from './Cart.module.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

const Cart = () => {
	const { cartItems } = useContext(ShoppingCartContext);
	return (
		<div className={styles.cart}>{cartItems.map((el) => console.log(el))}</div>
	);
};

export default Cart;
