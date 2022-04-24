import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';
import {Link} from 'react-router-dom';

import {City} from '~/types/City';

type CityItemProps = {
	item: City;
	canDelete?: boolean;
	onDelete?: () => void;
};

const CityItem = ({item, canDelete, onDelete}: CityItemProps) => {
	return (
		<Card
			sx={{width: '100%', border: `1px solid black`}}
			data-testid="city-item"
		>
			<CardContent>
				<Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
					Информация
				</Typography>
				<Typography variant="h5" component={Link} to={`/weather/${item.id}`}>
					{item.name}
				</Typography>
				<Typography sx={{mb: 1.5}} color="text.secondary">
					{item.base}
				</Typography>
				<img
					style={{width: '100%'}}
					src={`http://openweathermap.org/img/wn//${item.weather[0].icon}@4x.png`}
				/>
				<Typography variant="body2">
					{item.weather[0].main}
					<br />
					{item.weather[0].description}
					<br />
					<br />
					Чуствуется как: {item.main.feels_like}
					<br />
					Влажность: {item.main.humidity}
					<br />
					Давление: {item.main.pressure}
					<br />
					Максимальная температура: {item.main.temp_max}
					<br />
					Минимальная температура: {item.main.temp_min}
					<br />
				</Typography>
			</CardContent>
			<CardActions style={{display: 'block'}}>
				<Link
					to={`/weather/${item.id}`}
					style={{display: 'block', marginBottom: canDelete ? 10 : 0}}
				>
					Посмотреть полную информацию
				</Link>
				{canDelete && (
					<Button variant="contained" onClick={onDelete}>
						Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default CityItem;
