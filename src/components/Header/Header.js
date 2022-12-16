import styles from './Header.module.css';
import profile from '../../assets/profile.png';
import cart from '../../assets/cart.png';
import menu from '../../assets/menu.png';
import { Link, NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from './../../context/authProvider';

const Header = () => {
	const [isActive, setActive] = useState(true);
	const { auth } = useContext(AuthContext);
	const toggleMenu = () => {
		setActive(!isActive);
	};

	return (
		<div>
			<div className={styles.baner}>baner</div>
			<div className={styles.header}>
				<Link to='/'>
					<div>Logo</div>
				</Link>
				<nav onClick={() => setActive(true)}>
					<ul
						className={`${styles.categories} + ${
							isActive && styles.categories__off
						}`}
					>
						<li>
							<NavLink to='/'>Ksiązki</NavLink>
						</li>
						<li>
							<NavLink to='/'>Gry</NavLink>
						</li>
						<li>
							<NavLink to='/'>Ebooki</NavLink>
						</li>
						<li>
							<NavLink to='/'>Promocje</NavLink>
						</li>
						<li>
							<NavLink to='/'>Outlet</NavLink>
						</li>
					</ul>
				</nav>

				<div className={styles.icons}>
					<div className={styles.icons__profile}>
						
						<Link to='/Profile'>
							{auth.user}
							<img src={profile} alt='profile icon' />
						</Link>
						<Link to={'/Cart'}>
							<img src={cart} alt='cart icon' />
						</Link>
						<img
							src={menu}
							className={styles.icons__profile__menu}
							onClick={toggleMenu}
							alt='menu icon'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
