import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import axios from './../../axios';

const Login = () => {
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		// userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios.post('/users/login', {
            email: user,
            password : password
        } );
		console.log(response.data);
	};
	return (
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
	);
};

export default Login;
