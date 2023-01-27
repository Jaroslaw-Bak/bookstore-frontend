import styles from './Admin.module.css';
import { Link, Outlet, Navigate } from 'react-router-dom';

const Admin = () => {
	const isAuthenticated = localStorage.getItem('user');

	if (isAuthenticated !== 'shopAdmin@gmail.com') {
		console.log('notAuthenticated');
		return <Navigate to='/Login' replace />;
	}

	return (
		<div className={styles.wrapper}>
			<h1>Strona administratora</h1>
			<nav>
				<Link to='addProduct'>
					<button className='btn btn-primary'>Dodaj produkt</button>
				</Link>
				<Link to='users'>
					<button className='btn btn-primary m-3'>Użytkownicy</button>
				</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Admin;
