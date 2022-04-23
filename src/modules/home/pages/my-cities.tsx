import {Box, Button, Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useState} from 'react';

import {useAppSelector} from '~/hooks/redux';
import {selectCitiesState} from '~/store/reducers/cities/selectors';
import AddCityModal from '../components/AddCityModal';
import CityItem from '../components/CityItem';

const useStyles = makeStyles({
	container: {
		padding: '40px 15px',
	},
	gridWrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridColumnGap: '20px',
		gridRowGap: '20px',
	},
	topSide: {
		padding: '40px 0',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});

const MyCities = () => {
	const styles = useStyles();
	const citiesState = useAppSelector(selectCitiesState);
	const [isOpen, setModalOpen] = useState<boolean>(false);

	const outCities = () => {
		if (!citiesState.myCities.length) {
			return <Typography>There is no cities add it</Typography>;
		}
		return (
			<Box className={styles.gridWrapper}>
				{citiesState.myCities.map((elem, i) => (
					<CityItem item={elem} key={i} />
				))}
			</Box>
		);
	};

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};
	return (
		<Container className={styles.container}>
			<Box className={styles.topSide}>
				<Button variant="contained" onClick={handleModalOpen}>
					OPEN MODAL
				</Button>
			</Box>
			{outCities()}
			<AddCityModal open={isOpen} handleClose={handleModalClose} />
		</Container>
	);
};

export default MyCities;
