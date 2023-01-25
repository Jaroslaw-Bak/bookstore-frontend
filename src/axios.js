import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://bookstore-backend-isjb.vercel.app/api/v1',
});

export default instance;
