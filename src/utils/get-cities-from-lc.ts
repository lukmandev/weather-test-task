export const getCitiesFromLC = () => {
	const data = localStorage.getItem('my-cities');
	if (!data) {
		return [];
	}
	try {
		const parsedData = JSON.parse(data);
		return parsedData;
	} catch (e) {
		return [];
	}
};
