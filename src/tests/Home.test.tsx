import {act, render, screen, waitFor} from '@testing-library/react';

import App from '~/App';
import TestLayout from './helpers/TestLayout';
import api from '~/http/api';
import cities from '~/data/cities.json';

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

describe('Home page tests', () => {
	test('Home page must be exist', async () => {
		await act(async () => {
			render(
				<TestLayout initialRoute="/">
					<App />
				</TestLayout>
			);
		});
		const homePageContainer = screen.getByTestId('home-page');
		expect(homePageContainer).toBeInTheDocument();
	});
	test('Home page requests must be equal to cities length in json file', async () => {
		await act(async () => {
			render(
				<TestLayout initialRoute="/">
					<App />
				</TestLayout>
			);
		});
		await waitFor(() => expect(api.get).toHaveBeenCalledTimes(cities.length));
	});
});
