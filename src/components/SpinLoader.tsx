import {CircularProgress, Box} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
	box: {
		position: 'fixed',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		background: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 10000,
	},
});

const SpinLoader = () => {
	const styles = useStyles();
	return (
		<Box className={styles.box}>
			<CircularProgress />
		</Box>
	);
};

export default SpinLoader;
