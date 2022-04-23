import {Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import SpinLoader from '~/components/SpinLoader';
import {useAppDispatch, useAppSelector} from '~/hooks/redux';
import {fetchCityWeather} from '~/store/reducers/cities/actions';
import {selectCitiesState} from '~/store/reducers/cities/selectors';
import DetailCityWeather from '../components/DetailCityWeather';

const useStyles = makeStyles({
	container: {
		padding: '40px 15px',
	},
});

const DetailWeather = () => {
	const styles = useStyles();
	const dispatch = useAppDispatch();
	const citiesState = useAppSelector(selectCitiesState);
	const {id} = useParams();

	useEffect(() => {
		dispatch(fetchCityWeather(id as string));
	}, []);

	const outDetailCity = () => {
		if (citiesState.detailCityLoaded) {
			if (citiesState.detailCityError) {
				return <Typography>{citiesState.detailCityError}</Typography>;
			}
			if (citiesState.detailCity) {
				return <DetailCityWeather data={citiesState.detailCity} />;
			}
		}
		return null;
	};

	return (
		<Container className={styles.container} maxWidth={false}>
			{!citiesState.detailCityLoaded && <SpinLoader />}
			{outDetailCity()}
		</Container>
	);
};

export default DetailWeather;
