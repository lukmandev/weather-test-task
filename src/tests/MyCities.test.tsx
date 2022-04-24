import {act, render, screen} from '@testing-library/react';

import App from '~/App';
import TestLayout from './helpers/TestLayout';

describe('My cities page tests', () => {
	test('My cities page must be exist', async () => {
		await act(async () => {
			render(
				<TestLayout initialRoute="/my-cities">
					<App />
				</TestLayout>
			);
		});
		const homePageContainer = screen.getByTestId('my-cities-page');
		expect(homePageContainer).toBeInTheDocument();
	});
});
