import {createAsyncThunk} from '@reduxjs/toolkit';
import _ from 'lodash';

import api from '~/http/api';
import cities from '~/data/cities.json';
import {
	setCities,
	setCitiesError,
	setCitiesLoaded,
	setDetailCity,
	setDetailCityError,
	setDetailCityLoaded,
} from './reducer';
import {AxiosError} from 'axios';

export const fetchCities = createAsyncThunk(
	'fetchCities',
	async (__, {dispatch}) => {
		dispatch(setCitiesLoaded(false));
		dispatch(setCitiesError(null));
		const fetchedCitiesPromises: any = [];
		let fetchedCities: any = [];
		for (let i = 0; i < cities.length; i++) {
			const city = cities[i];
			const promise = api.get(
				`/data/2.5/weather?q=${city.name}&units=metric&lang=ru`
			);
			fetchedCitiesPromises.push(promise);
		}
		try {
			const allPromises = await Promise.allSettled(fetchedCitiesPromises);
			const filteredCities = _.filter(
				allPromises,
				(el: any) => el.status && el.value
			);
			fetchedCities = _.map(filteredCities, (el: any) => el.value.data);
		} catch (e) {}
		const sortedCities = _.uniqBy(fetchedCities, (e: any) => e.id);
		!sortedCities.length && dispatch(setCitiesError('Some error happened'));
		dispatch(setCities(sortedCities));
		dispatch(setCitiesLoaded(true));
	}
);

export const fetchCityWeather = createAsyncThunk(
	'fetchCityWeather',
	async (cityId: string, {dispatch}) => {
		dispatch(setDetailCityLoaded(false));
		try {
			const {
				data: {
					coord: {lon, lat},
				},
			} = await api.get(`/data/2.5/weather?id=${cityId}&units=metric`);
			const {data} = await api.get(
				`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric`
			);
			dispatch(setDetailCity(data));
		} catch (e) {
			const error = e as AxiosError;
			if (error.response && error.response.status) {
				dispatch(setDetailCityError('Город не найден'));
			} else {
				dispatch(setDetailCityError('Произошла какая то ошибка'));
			}
		} finally {
			dispatch(setDetailCityLoaded(true));
		}
	}
);
