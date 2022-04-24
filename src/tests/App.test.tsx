import {act, render, screen} from '@testing-library/react';

import App from '~/App';
import TestLayout from './helpers/TestLayout';

describe('App js tests', () => {
	test('App js must be exist', async () => {
		await act(async () => {
			render(
				<TestLayout initialRoute="/">
					<App />
				</TestLayout>
			);
		});
		const appLayout = screen.getByTestId('app');
		expect(appLayout).toBeInTheDocument();
	});
});
