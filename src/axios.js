import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://76.76.21.241/api/v1/',
});

export default instance;
