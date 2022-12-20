import styles from './Auth.module.css';
import AuthContext from '../../context/authProvider';
import { useRef, useState, useEffect, useContext } from 'react';

const Auth = () => {
	const { auth, setAuth } = useContext(AuthContext);
	const [authMode, setAuthMode] = useState('signIn');

	const handleAuthMode = () => {
		setAuthMode(authMode === 'signIn' ? 'signUp' : 'signIn');
	};

	if (authMode === 'signIn') {
		return (
			<div className={styles.auth__form__container}>
				<form className={styles.auth__form}>
					<div className={styles.auth__form__content}>
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
							/>
						</div>
						<div className='form-group mt-3'>
							<label>Password</label>
							<input
								type='password'
								className='form-control mt-1'
								placeholder='Enter password'
							/>
						</div>
						<div className='d-grid gap-2 mt-3'>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</div>
						<p className='forgot-password text-right mt-2'>
							Forgot <a href='#'>password?</a>
						</p>
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
