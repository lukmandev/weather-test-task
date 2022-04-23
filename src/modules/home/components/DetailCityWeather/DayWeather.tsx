import {Box, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {format} from 'date-fns-tz';

import {DailyEntity} from '~/types/City';

type DayWeatherProps = {
	dayWeather: DailyEntity;
};

const commonStyles = {};

const useOtherDayWeatherStyles = makeStyles({
	wrapper: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid #eee',
		padding: '15px',
		borderRadius: '10px',
		background: 'rgba(0,0,0,0.2)',
	},
	day: {
		padding: '5px 15px',
		background: '#3C3C44',
		borderRadius: '50px',
		textAlign: 'center',
		color: '#fff',
	},
	weatherIcon: {},
	tempTitle: {
		fontWeight: 100,
		fontSize: 12,
	},
});

export const OtherDayWeather = ({dayWeather}: DayWeatherProps) => {
	const styles = useOtherDayWeatherStyles();
	return (
		<Box className={styles.wrapper}>
			<Box className={styles.day}>{format(dayWeather.dt * 1000, 'eeee')}</Box>
			<img
				src={`http://openweathermap.org/img/wn/${dayWeather?.weather[0].icon}@2x.png`}
				alt="weather icon"
				className="w-icon"
			/>
			<Typography className={styles.tempTitle}>
				Night - ${dayWeather.temp.night}&#176;C
			</Typography>
			<Typography className={styles.tempTitle}>
				Day - ${dayWeather.temp.day}&#176;C
			</Typography>
		</Box>
	);
};

const useTodayWeatherStyles = makeStyles({
	wrapper: {
		width: '100%',
		height: 232,
		display: 'grid',
		gridTemplateColumns: '1.2fr 1fr',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid #000',
		padding: '15px',
		borderRadius: '10px',
		background: 'rgba(0,0,0,0.2)',
	},
	day: {
		padding: '5px 15px',
		background: '#3C3C44',
		borderRadius: '50px',
		textAlign: 'center',
		color: '#fff',
	},
	weatherIcon: {
		width: '100%',
	},
	tempTitle: {
		fontWeight: 100,
		fontSize: 18,
		marginTop: 10,
	},
});

export const TodayWeather = ({dayWeather}: DayWeatherProps) => {
	const styles = useTodayWeatherStyles();
	return (
		<Box className={styles.wrapper}>
			<img
				src={`http://openweathermap.org/img/wn/${dayWeather?.weather[0].icon}@2x.png`}
				alt="weather icon"
				className={styles.weatherIcon}
			/>
			<Box>
				<Box className={styles.day}>{format(dayWeather.dt * 1000, 'eeee')}</Box>
				<Typography className={styles.tempTitle}>
					Night - ${dayWeather.temp.night}&#176;C
				</Typography>
				<Typography className={styles.tempTitle}>
					Day - ${dayWeather.temp.day}&#176;C
				</Typography>
			</Box>
		</Box>
	);
};
