import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import _ from 'lodash';

import {City, DetailCity} from '~/types/City';
import {getCitiesFromLC} from '~/utils/get-cities-from-lc';

type sliceType = {
	cities: City[];
	citiesLoaded: boolean;
	citiesError: null | string;
	detailCity: DetailCity | null;
	detailCityError: null | string;
	detailCityLoaded: boolean;
	myCities: number[];
	myCitiesData: City[];
	myCitiesLoaded: boolean;
};

const initialState: sliceType = {
	cities: [],
	citiesLoaded: false,
	citiesError: null,
	detailCity: null,
	detailCityError: null,
	detailCityLoaded: false,
	myCities: getCitiesFromLC(),
	myCitiesData: [],
	myCitiesLoaded: false,
};

const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		setCities(state, action: PayloadAction<sliceType['cities']>) {
			state.cities = action.payload;
		},
		setCitiesLoaded(state, action: PayloadAction<sliceType['citiesLoaded']>) {
			state.citiesLoaded = action.payload;
		},
		setCitiesError(state, action: PayloadAction<sliceType['citiesError']>) {
			state.citiesError = action.payload;
		},
		setDetailCity(state, action: PayloadAction<sliceType['detailCity']>) {
			state.detailCity = action.payload;
		},
		setDetailCityLoaded(
			state,
			action: PayloadAction<sliceType['detailCityLoaded']>
		) {
			state.detailCityLoaded = action.payload;
		},
		setDetailCityError(
			state,
			action: PayloadAction<sliceType['detailCityError']>
		) {
			state.detailCityError = action.payload;
		},
		addToStartToMyCities(state, action: PayloadAction<number>) {
			state.myCities = [
				...(new Set([
					action.payload,
					...state.myCities,
				]) as unknown as number[]),
			];
		},
		deleteCityFromMyCities(state, action: PayloadAction<number>) {
			state.myCities = state.myCities.filter((el) => el !== action.payload);
		},
		setMyCities(state, action: PayloadAction<sliceType['myCitiesData']>) {
			state.myCitiesData = action.payload;
		},
		setMyCitiesLoaded(
			state,
			action: PayloadAction<sliceType['myCitiesLoaded']>
		) {
			state.myCitiesLoaded = action.payload;
		},
	},
});

export const {
	setCities,
	setCitiesError,
	setCitiesLoaded,
	setDetailCity,
	setDetailCityError,
	setDetailCityLoaded,
	addToStartToMyCities,
	setMyCities,
	setMyCitiesLoaded,
	deleteCityFromMyCities,
} = citiesSlice.actions;

export default citiesSlice.reducer;
