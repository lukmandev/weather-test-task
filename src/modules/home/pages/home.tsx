import {Container, Box} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '~/hooks/redux';
import {fetchCities} from '~/store/reducers/cities/actions';
import {selectCitiesState} from '~/store/reducers/cities/selectors';
import CityItem from '../components/CityItem';
import CityItemSkeleton from '../components/CityItem/skeleton';

const useStyles = makeStyles({
	container: {
		padding: '40px 0',
	},
	gridContainer: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridColumnGap: '20px',
		gridRowGap: '20px',
	},
});

const Home = () => {
	const citiesState = useAppSelector(selectCitiesState);
	const dispatch = useAppDispatch();
	const styles = useStyles();

	useEffect(() => {
		dispatch(fetchCities());
	}, []);

	const outCities = () => {
		if (citiesState.citiesLoaded) {
			if (citiesState.citiesError) {
				return null;
			}
			if (citiesState.cities.length) {
				return citiesState.cities.map((elem) => (
					<CityItem key={elem.id} item={elem} />
				));
			}
			return null;
		}
		return Array(10)
			.fill(0)
			.map((__, i) => <CityItemSkeleton key={i} />);
	};

	return (
		<Container className={styles.container} data-testid="home-page">
			<Box className={styles.gridContainer}>{outCities()}</Box>
		</Container>
	);
};

export default Home;
