import {Box, Container, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {format, zonedTimeToUtc} from 'date-fns-tz';
import _ from 'lodash';

import {DetailCity, Hourly} from '~/types/City';
import {displayTempAsCssColor} from '~/utils/color-by-temp';
import {transformByTemp} from '~/utils/transform-by-temp';
import {OtherDayWeather, TodayWeather} from './DayWeather';

type DetailCityWeatherProps = {
	data: DetailCity;
};

const useStyles = makeStyles({
	container: {
		maxWidth: '1450px',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		overflow: 'hidden',
	},
	gridWrapper: {
		width: '100%',
		display: 'grid',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
		gridColumnGap: '10px',
	},
	currentInfo: {
		maxWidth: 300,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		background: 'rgba(24,24,27, 0.6)',
		padding: '20px',
		borderRadius: '10px',
		margin: '10px 0',
		border: '1px solid #eee',
	},
	currentInfoItem: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	currentInfoTitle: {
		color: '#fff',
	},
	cityTime: {
		fontSize: 50,
	},
	dayWithHoursWrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	dayHoursWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		gap: '30px',
		padding: '60px 0',
	},
	hoursBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: '5px',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		background: 'green',
		padding: '10px 20px',
		borderRadius: '5px',
	},
});

const DetailCityWeather = ({data}: DetailCityWeatherProps) => {
	const styles = useStyles();

	const currentInfo = {
		humidity: {
			title: 'Humidity',
			value: data.current.humidity,
		},
		pressure: {
			title: 'Pressure',
			value: data.current.pressure,
		},
		wind_speed: {
			title: 'Wind Speed',
			value: data.current.wind_speed,
		},
		sunrise: {
			title: 'Sunrise',
			value: format(data.current.sunrise * 1000, 'HH:mm a'),
		},
		sunset: {
			title: 'Sunset',
			value: format(data.current.sunset * 1000, 'HH:mm a'),
		},
	};

	const outHoursInfo = () => {
		const mapByDay = _.map(data.hourly, (e: Hourly) => ({
			...e,
			day: format(e.dt * 1000, 'eee'),
			dt: format(e.dt * 1000, 'HH:mm'),
		}));
		return (
			<Box className={styles.dayHoursWrapper}>
				{mapByDay.map((elem, i) => (
					<Box key={i} style={{padding: '35px 0'}}>
						<Box
							className={styles.hoursBox}
							style={{
								background: displayTempAsCssColor(elem.temp),
								transform: transformByTemp(elem.temp),
							}}
						>
							<Typography>{elem.day}</Typography>
							<Typography>{elem.dt}</Typography>
							<Typography>{elem.temp}</Typography>
						</Box>
					</Box>
				))}
			</Box>
		);
	};
	return (
		<Container className={styles.container}>
			<Typography component="h1" className={styles.cityTime}>
				{format(zonedTimeToUtc(new Date(), data.timezone), 'HH:mm:ss')}
			</Typography>
			<Box className={styles.gridWrapper}>
				{data.daily.map((elem, idx) => {
					// If the index is 0, then today's weather component will be returned.
					return idx ? (
						<OtherDayWeather dayWeather={elem} key={idx} />
					) : (
						<TodayWeather dayWeather={elem} key={idx} />
					);
				})}
			</Box>
			<Box className={styles.currentInfo}>
				{_.map(Object.entries(currentInfo), (elem) => (
					<Box key={elem[1].title} className={styles.currentInfoItem}>
						<Typography className={styles.currentInfoTitle}>
							{elem[1].title}
						</Typography>
						<Typography className={styles.currentInfoTitle}>
							{elem[1].value}
						</Typography>
					</Box>
				))}
			</Box>
			<Box className={styles.dayWithHoursWrapper}>{outHoursInfo()}</Box>
		</Container>
	);
};

export default DetailCityWeather;
