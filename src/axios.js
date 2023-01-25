import axios from 'axios'

const instance = axios.create({
	baseURL: 'bookstore-backend-isjb.vercel.app/api/v1',
});

export default instance;
