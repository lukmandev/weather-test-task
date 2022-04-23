import {Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';

import {useAppSelector} from '~/hooks/redux';
import {selectCitiesState} from '~/store/reducers/cities/selectors';
import CityItem from '../components/CityItem';

const useStyles = makeStyles({
	gridWrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
	},
});

const MyCities = () => {
	const styles = useStyles();
	const citiesState = useAppSelector(selectCitiesState);

	const outCities = () => {
		if (!citiesState.myCities.length) {
			return <Typography>There is no cities add it</Typography>;
		}
		return citiesState.myCities.map((elem, i) => (
			<CityItem item={elem} key={i} />
		));
	};
	return <Container className={styles.gridWrapper}>{outCities()}</Container>;
};

export default MyCities;
