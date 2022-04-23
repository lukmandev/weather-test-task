import {AppBar, Container} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {HomeRoutesEnum} from '~/modules/home/routes/enum';

type MainLayoutProps = {
	children: ReactNode;
};

const useStyles = makeStyles({
	container: {
		padding: '40px 0',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	myCitiesLink: {
		fontSize: 22,
		color: '#fff',
	},
});

const MainLayout = ({children}: MainLayoutProps) => {
	const styles = useStyles();
	return (
		<>
			<AppBar position="sticky">
				<Container className={styles.container}>
					<Link to={HomeRoutesEnum.HOME} className={styles.myCitiesLink}>
						Home
					</Link>
					<Link to={HomeRoutesEnum.MY_CITIES} className={styles.myCitiesLink}>
						My Cities
					</Link>
				</Container>
			</AppBar>
			{children}
		</>
	);
};

export default MainLayout;
