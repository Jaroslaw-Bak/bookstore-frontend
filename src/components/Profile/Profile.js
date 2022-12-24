import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authProvider';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

const Profile = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const { clearCart} = useContext(ShoppingCartContext);

	const handleLogout = () => {
		setAuth(false);
		localStorage.clear();
		clearCart();
	};

	useEffect(() => {
		if (!auth) {
			navigate('/Auth');
		}
	});

	if (auth.user) {
		return (
			<main className={styles.wrapper}>
				<div>
					{auth.user}
					<button className='btn btn-primary' onClick={() => handleLogout()}>Logout</button>
				</div>
			</main>
		);
	}
};

export default Profile;
