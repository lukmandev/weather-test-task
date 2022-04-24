import {act, render, screen, waitFor} from '@testing-library/react';

import App from '~/App';
import TestLayout from './helpers/TestLayout';
import api from '~/http/api';

jest.mock('axios', () => {
	return {
		create: jest.fn(() => ({
			get: jest.fn(),
			interceptors: {
				request: {use: jest.fn(), eject: jest.fn()},
				response: {use: jest.fn(), eject: jest.fn()},
			},
		})),
	};
});

describe('Detail weather tests', () => {
	test('Detail Weather page must be exist', async () => {
		await act(async () => {
			render(
				<TestLayout initialRoute="/weather/test">
					<App />
				</TestLayout>
			);
		});
		const homePageContainer = screen.getByTestId('detail-weather-page');
		expect(homePageContainer).toBeInTheDocument();
	});
	test('Detail Weather request must be called only one time', async () => {
		await act(async () => {
			render(
				<TestLayout initialRoute="/weather/test">
					<App />
				</TestLayout>
			);
		});
		await waitFor(() => expect(api.get).toHaveBeenCalledTimes(1));
	});
});
