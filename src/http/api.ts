import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.openweathermap.org',
});

api.interceptors.request.use(
	(config) => {
		config.params = {
			...config.params,
			appid: 'f9a4d9ae1e4c03a60aae940410297e18',
			units: 'metric',
		};
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
