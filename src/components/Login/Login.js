import styles from './Login.module.css';
import AuthContext from '../../context/authProvider';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';

const Auth = () => {
	const { setAuth } = useContext(AuthContext);

	const [authMode, setAuthMode] = useState('signIn');

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();

	const handleAuthMode = () => {
		setAuthMode(authMode === 'signIn' ? 'signUp' : 'signIn');
	};

	useEffect(() => {
		setErrMsg('');
		success && navigate('/profile');
	}, [user, password, success,navigate]);

	const handleLogin = async (e) => {
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

	if (authMode === 'signIn') {
		return (
			<div className={styles.auth__form__container}>
				<form className={styles.auth__form} onSubmit={handleLogin}>
					<div className={styles.auth__form__content}>
						{errMsg}
						<h3 className={styles.auth__form__title}>Sign In</h3>
						<div className='text-center'>
							Not registered yet?{' '}
							<span className='link-primary' onClick={() => handleAuthMode()}>
								Sign Up
							</span>
						</div>
						<div className='form-group mt-3'>
							<label>Email address</label>
							<input
								type='email'
								className='form-control mt-1'
								placeholder='Enter email'
								value={user}
								onChange={(e) => setUser(e.target.value)}
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Password</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Enter password'
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</div>
						<div className='d-grid gap-2 mt-3'>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
	if (authMode === 'signUp') {
		return (
			<div className={styles.auth__form__container}>
				<form className={styles.auth__form}>
					<div className={styles.auth__form__content}>
						<h3 className={styles.auth__form__title}>Sign Up</h3>
						<div className='text-center'>
							Already registered?{' '}
							<span className='link-primary' onClick={() => handleAuthMode()}>
								Sign In
							</span>
						</div>
						<div className='form-group mt-3'>
							<label>Email address</label>
							<input
								type='email'
								className='form-control mt-1'
								placeholder='Email Address'
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Password</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Password'
							/>
						</div>
						<div className='d-grid gap-2 mt-3'>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
};
export default Auth;
