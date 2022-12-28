import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authProvider';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import userProfilePicture from './../../assets/userProfilePicture.png';

const Profile = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	const { clearCart } = useContext(ShoppingCartContext);

	const handleLogout = () => {
		setAuth(false);
		localStorage.clear();
		clearCart();
	};

	useEffect(() => {
		if (!auth) {
			navigate('/Login');
		}
	});

	if (auth.user) {
		return (
			<main className={styles.wrapper}>
				<img src={userProfilePicture} alt='user profile ' />
				<div>{auth.user}</div>
				<button className='btn btn-primary' onClick={() => handleLogout()}>
					Logout
				</button>
			</main>
		);
	}
};

export default Profile;
