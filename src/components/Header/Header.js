import styles from './Header.module.css';
import logo from './../../assets/logo.png';
import profile from '../../assets/profile.png';
import cart from '../../assets/cart.png';
import menu from '../../assets/menu.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
	const [isActive, setActive] = useState(true);
	const toggleMenu = () => {
		setActive(!isActive);
	};

	return (
		<div>
			<div className={styles.baner}></div>
			<div className={styles.header}>
				<Link to='/'>
					<img className={styles.logo} src={logo} alt='logo' />
				</Link>
				<nav onClick={() => setActive(true)}>
					<ul
						className={`${styles.categories} + ${isActive && styles.categories__off}`}
					>
						<li>
							<NavLink to='/Products/books'>Książki</NavLink>
						</li>
						<li>
							<NavLink to='/Products/games'>Gry</NavLink>
						</li>
						<li>
							<NavLink to='/Products/ebooks'>Ebooki</NavLink>
						</li>
						<li>
							<NavLink to='/Products/audiobooks'>Audiobooki</NavLink>
						</li>
					</ul>
				</nav>

				<div className={styles.icons}>
					<div className={styles.icons__profile}>
						<Link to='/Profile'>
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
