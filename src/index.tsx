import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@mui/styles';
import {Provider} from 'react-redux';
import {StyledEngineProvider} from '@mui/material/styles';

import './styles/index.css';
import App from './App';
import theme from './utils/theme';
import store from '~/store/reducer';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<StyledEngineProvider injectFirst>
				<Provider store={store}>
					<App />
					<GlobalStyles />
				</Provider>
			</StyledEngineProvider>
		</BrowserRouter>
	</ThemeProvider>
);
