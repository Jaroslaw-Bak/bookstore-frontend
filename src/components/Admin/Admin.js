import styles from './Admin.module.css';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
	return (
		<div className={styles.wrapper}>
			<h1>Admin Page</h1>
			<nav>
				<Link to='addProduct'>
					<button className='btn btn-primary'>AddProduct</button>
				</Link>
				<Link to='users'>
					<button className='btn btn-primary m-3'>Users</button>
				</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Admin;
