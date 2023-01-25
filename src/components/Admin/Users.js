import axios from './../../axios';
import { useState, useEffect } from 'react';
import styles from './Users.module.css';

const Users = () => {
	const [users, setUsers] = useState('');

	const deleteUserhandler = (e, _id) => {
		e.preventDefault();
		deleteUser(_id);
		console.log('delete user', _id);
	};

	async function deleteUser(_id) {
		try {
			const tempUsers = [...users].filter(user => user._id !== _id);
			const response = await axios.delete(`/users/${_id}`);
			console.log(response)
			setUsers(tempUsers)
		} catch (err) {
			console.log(err);
		}
	}

	async function getData() {
		try {
			const response = await axios.get('/users');
			const data = response.data.data.users;
			setUsers(data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={styles.section}>
			<ul className='list-group'>
				{users &&
					users.map((user) => (
						<li className='list-group-item d-flex justify-content-between align-items-center'>
							<div>{user.email}</div>
							<button
								onClick={(e) => deleteUserhandler(e, user._id)}
								className='btn btn-danger'
							>
								delete user
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Users;
