import axios from './../../axios';
import { useState, useEffect } from 'react';

const Users = () => {
	const [users, setUsers] = useState('');

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
		<div>
			<ul>{users && users.map((user) => <li>{user.email}</li>)}</ul>
		</div>
	);
};

export default Users;
