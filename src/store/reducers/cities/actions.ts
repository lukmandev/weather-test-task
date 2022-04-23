import {createAsyncThunk} from '@reduxjs/toolkit';
import _ from 'lodash';
import {AxiosError, AxiosResponse} from 'axios';

import api from '~/http/api';
import cities from '~/data/cities.json';
import {
	setCities,
	setCitiesError,
	setCitiesLoaded,
	setDetailCity,
	setDetailCityError,
	setDetailCityLoaded,
	setMyCities,
	setMyCitiesLoaded,
} from './reducer';
import {RootState} from '~/store/reducer';

export const fetchCities = createAsyncThunk(
	'fetchCities',
	async (__, {dispatch}) => {
		dispatch(setCitiesLoaded(false));
		dispatch(setCitiesError(null));
		const fetchedCitiesPromises: any = [];
		let fetchedCities: any = [];
		for (let i = 0; i < cities.length; i++) {
			const city = cities[i];
			const promise = api.get(`/data/2.5/weather?q=${city.name}&lang=ru`);
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
		!sortedCities.length &&
			dispatch(setCitiesError('Произошла какая то ошибка'));
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
			} = await api.get(`/data/2.5/weather?id=${cityId}`);
			const {data} = await api.get(
				`/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely`
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

export const checkForExistence = createAsyncThunk(
	'checkForExistence',
	async (cityTitle: string, __) => {
		const returnedData = {
			error: {
				hasError: false,
				message: '',
			},
			data: null,
		};
		try {
			const {data} = await api.get(`/data/2.5/weather?q=${cityTitle}`);
			returnedData.data = data;
		} catch (e) {
			returnedData.error.hasError = true;
			const error = e as AxiosError;
			if (error?.response?.status === 404) {
				returnedData.error.message = 'Такой город не найден';
			} else {
				returnedData.error.message = 'Произошла какая то ошибка';
			}
		} finally {
			return returnedData;
		}
	}
);

export const fetchMyCities = createAsyncThunk(
	'fetchMyCities',
	async (__, {dispatch, getState}) => {
		dispatch(setMyCitiesLoaded(false));

		const {
			cities: {myCities},
		} = getState() as RootState;

		const promiseArray: Promise<AxiosResponse>[] = [];
		myCities.map((elem) => {
			const request = api.get(`/data/2.5/weather?id=${elem}`);
			promiseArray.push(request);
		});
		const allPromises = await Promise.allSettled(promiseArray);
		const filteredCities = _.filter(
			allPromises,
			(el: any) => el.status && el.value
		);
		const fetchedCities = _.map(filteredCities, (el: any) => el.value.data);
		dispatch(setMyCities(fetchedCities));
		dispatch(setMyCitiesLoaded(true));
	}
);
