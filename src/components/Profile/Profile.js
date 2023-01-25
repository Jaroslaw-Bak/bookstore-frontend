import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authProvider';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';

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

	if (auth.user === 'shopAdmin@gmail.com') {
		return (
			<main className={styles.wrapper}>
				<Link to='/admin'>
					<button className='btn btn-primary mb-4'>
						Strona administatora
					</button>
				</Link>
				<button className='btn btn-primary' onClick={() => handleLogout()}>
					Wyloguj
				</button>
			</main>
		);
	}

	if (auth.user) {
		return (
			<main className={styles.wrapper}>
				<img src={profile} alt='user profile ' />
				<div>{auth.user}</div>
				<button className='btn btn-primary' onClick={() => handleLogout()}>
					Wyloguj
				</button>
			</main>
		);
	}
};

export default Profile;
