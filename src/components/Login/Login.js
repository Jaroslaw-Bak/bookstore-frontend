import styles from './Login.module.css';
import AuthContext from '../../context/authProvider';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';

const Login = () => {
	const { auth, setAuth } = useContext(AuthContext);

	const [authMode, setAuthMode] = useState('signIn');

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [newUser, setNewUser] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [registerMessage, setRegisterMessage] = useState(false);
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();

	const handleAuthMode = () => {
		setAuthMode(authMode === 'signIn' ? 'signUp' : 'signIn');
	};

	useEffect(() => {
		setErrMsg('');
		success && navigate('/');
	}, [user, password, success, navigate]);

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
			auth && console.log(auth);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Błąd logowania ');
			} else {
				setErrMsg('Login failed');
			}
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('/users/signup', {
				email: newUser,
				password: newPassword,
				passwordConfirm: confirmNewPassword,
			});
			console.log(response.data)
			setRegisterMessage('Zarejestrowano')
		} catch (err) {
			console.log(err);
			setRegisterMessage('Błąd rejestracji')
		}
	};

	if (authMode === 'signIn') {
		return (
			<div className={styles.auth__form__container}>
				<form className={styles.auth__form} onSubmit={handleLogin}>
					<div className={styles.auth__form__content}>
						{errMsg}
						<h3 className={styles.auth__form__title}>Zaloguj się</h3>
						<div className='text-center'>
							Nie masz konta? {''}
							<span className='link-primary' onClick={() => handleAuthMode()}>
								Zarejestruj się
							</span>
						</div>
						<div className='form-group mt-3'>
							<label>Email</label>
							<input
								type='email'
								className='form-control mt-1'
								placeholder='Wpisz email'
								value={user}
								onChange={(e) => setUser(e.target.value)}
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Hasło</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Wpisz hasło'
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</div>
						<div className='d-grid gap-2 mt-3'>
							<button type='submit' className='btn btn-primary'>
								Zaloguj
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
				<form className={styles.auth__form} onSubmit={handleRegister}>
					<div className={styles.auth__form__content}>
						{registerMessage}
						<h3 className={styles.auth__form__title}>Rejestracja</h3>
						<div className='text-center'>
							Masz już konto?{' '}
							<span className='link-primary' onClick={() => handleAuthMode()}>
								Zaloguj się
							</span>
						</div>
						<div className='form-group mt-3'>
							<label>Email</label>
							<input
								type='email'
								className='form-control mt-1'
								placeholder='Wpisz email'
								value={newUser}
								onChange={(e) => setNewUser(e.target.value)}
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Hasło</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Wpisz hasło'
								onChange={(e) => setNewPassword(e.target.value)}
								value={newPassword}
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Powtórz hasło</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Powtórz hasło'
								onChange={(e) => setConfirmNewPassword(e.target.value)}
								value={confirmNewPassword}
							/>
						</div>
						<div className='d-grid gap-2 mt-4'>
							<button type='submit' className='btn btn-primary'>
								Zarejestruj
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
};
export default Login;
