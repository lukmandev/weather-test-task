import {Box, Button, Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from '~/hooks/redux';
import {fetchMyCities} from '~/store/reducers/cities/actions';
import {deleteCityFromMyCities} from '~/store/reducers/cities/reducer';
import {selectCitiesState} from '~/store/reducers/cities/selectors';
import AddCityModal from '../components/AddCityModal';
import CityItem from '../components/CityItem';
import CityItemSkeleton from '../components/CityItem/skeleton';

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
	noDataBox: {
		width: '100%',
		display: 'grid',
		placeItems: 'center',
	},
});

const MyCities = () => {
	const styles = useStyles();
	const citiesState = useAppSelector(selectCitiesState);
	const dispatch = useAppDispatch();
	const [isOpen, setModalOpen] = useState<boolean>(false);

	useEffect(() => {
		dispatch(fetchMyCities());
		localStorage.setItem('my-cities', JSON.stringify(citiesState.myCities));
	}, [citiesState.myCities]);

	const handleDeleteCity = (id: number) => () => {
		dispatch(deleteCityFromMyCities(id));
	};

	const outCities = () => {
		if (citiesState.myCitiesLoaded) {
			if (!citiesState.myCitiesData.length) {
				return (
					<Box className={styles.noDataBox}>
						<Typography>Вы еще не добавляли городов</Typography>
					</Box>
				);
			}
			return (
				<Box className={styles.gridWrapper}>
					{citiesState.myCitiesData.map((elem) => (
						<CityItem
							canDelete
							onDelete={handleDeleteCity(elem.id)}
							item={elem}
							key={elem.id}
						/>
					))}
				</Box>
			);
		}
		return (
			<Box className={styles.gridWrapper}>
				{Array(10)
					.fill(0)
					.map((__, i) => (
						<CityItemSkeleton key={i} />
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
		<Container className={styles.container} data-testid="my-cities-page">
			<Box className={styles.topSide}>
				<Button variant="contained" onClick={handleModalOpen}>
					Добавить модальное окно
				</Button>
			</Box>
			{outCities()}
			<AddCityModal open={isOpen} handleClose={handleModalClose} />
		</Container>
	);
};

export default MyCities;
