import loadable from '@loadable/component';
import {Route} from 'react-router-dom';

import {HomeRoutesEnum} from './enum';

const HomePage = loadable(() => import('../pages/home'));
const DetailWeatherPage = loadable(() => import('../pages/detail-weather'));
const MyCities = loadable(() => import('../pages/my-cities'));

const homeRoutes = [
	<Route key="HomePage" path={HomeRoutesEnum.HOME} element={<HomePage />} />,
	<Route
		key="DetailWeatherPage"
		path={HomeRoutesEnum.DETAIL_WEATHER}
		element={<DetailWeatherPage />}
	/>,
	<Route
		key="MyCities"
		path={HomeRoutesEnum.MY_CITIES}
		element={<MyCities />}
	/>,
];

export default homeRoutes;
