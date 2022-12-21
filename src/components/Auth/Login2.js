import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/authProvider';
import axios from '../../axios';

const Login = () => {
	const { setAuth} = useContext(AuthContext);
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);


	useEffect(() => {
		setErrMsg('');
	}, [user, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/users/login', {
				email: user,
				password: password,
			});
			console.log(response.data);
			const token = response?.data?.token;
			setAuth({ user, token });
			localStorage.setItem('user', user);
			localStorage.setItem('token', token);
			setUser('');
			setPassword('');
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login failed');
			}
		}
	};
	return (
		<div className={styles.wrapper}>
			{success ? (
				<div>
					Logged In
					<br />
					<Link to='/'>Home Page</Link>
				</div>
			) : (
				<section>
					<p ref={errRef}>{errMsg}</p>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							id='username'
							ref={userRef}
							autoComplete='off'
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>
						<label htmlFor='password'>Password:</label>
						<input
							type='password'
							id='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<button>Sign In</button>
					</form>
					<div>
						<p>Need an Account?</p>
						<Link to='/Register'>
							<p>Register</p>
						</Link>
					</div>
				</section>
			)}
		</div>
	);
};

export default Login;
