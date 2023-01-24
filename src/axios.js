import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://178.43.128.110/api/v1/',
});

export default instance;
