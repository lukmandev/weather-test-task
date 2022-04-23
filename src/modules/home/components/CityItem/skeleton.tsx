import {Card, CardContent, Skeleton} from '@mui/material';

const CityItemSkeleton = () => {
	return (
		<Card sx={{width: '100%'}}>
			<CardContent>
				<Skeleton height={90} />
				<Skeleton height={30} />
				<Skeleton height={200} />
				<Skeleton height={160} />
				<Skeleton height={22} />
			</CardContent>
		</Card>
	);
};

export default CityItemSkeleton;
