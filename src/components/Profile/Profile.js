import styles from './Profile.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './../../context/authProvider';

const Profile = () => {
	const { auth, setAuth } = useContext(AuthContext);

	const handleLogout = () => {
		setAuth({})
		localStorage.clear()
	}

	return (
		<main className={styles.wrapper}>
			{auth.user ? (
				<div>
					{auth.user}
					<button onClick={() => handleLogout()}>Logout</button>
				</div>
				
			) : (
				<Link to='/Login'>
					<p>Login</p>
				</Link>
			)}
		</main>
	);
};

export default Profile;
