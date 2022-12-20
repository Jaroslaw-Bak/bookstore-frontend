import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authProvider';

const Profile = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		setAuth(false);
		localStorage.clear();
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
					<button onClick={() => handleLogout()}>Logout</button>
				</div>
			</main>
		);
	}
};

export default Profile;
