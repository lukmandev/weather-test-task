import {Suspense} from 'react';
import {Routes} from 'react-router-dom';
import MainLayout from './components/MainLayout';

import SpinLoader from './components/SpinLoader';
import homeRoutes from './modules/home/routes';

const App = () => {
	return (
		<Suspense fallback={<SpinLoader />}>
			<MainLayout>
				<Routes>{homeRoutes}</Routes>
			</MainLayout>
		</Suspense>
	);
};

export default App;
