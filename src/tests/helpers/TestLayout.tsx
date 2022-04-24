import {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import store from '~/store/reducer';

type TestLayoutProps = {
	children: ReactNode;
	initialRoute: string;
};

const TestLayout = ({children, initialRoute}: TestLayoutProps) => {
	return (
		<MemoryRouter initialEntries={[initialRoute]}>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	);
};

export default TestLayout;
