import { render, screen } from '@testing-library/react';
import { YouTubePlayerProvider } from '../../context/YouTubePlayerContext';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import Manager from './Manager';

// Integration tests
describe('Testing QR code on page when a playlist ID is not present', () => {
	test('If QR code SVG does not exist on document', () => {
		render(
			<BrowserRouter>
				<YouTubePlayerProvider value={{ playlistId: '' }}>
					<Manager />
				</YouTubePlayerProvider>
			</BrowserRouter>
		);

		expect(screen.queryAllByTestId('qr-code')).toStrictEqual([]);
	});
});

describe('Testing new playlist button', () => {
	test('Clicking new playlist button', () => {
		const history = createMemoryHistory();

		render(
			<BrowserRouter>
				<YouTubePlayerProvider value={{ playlistId: '' }}>
					<Manager />
				</YouTubePlayerProvider>
			</BrowserRouter>
		);

		act(() => {
			const playlistBtn = screen.queryByText('New playlist');
			playlistBtn.click();
			expect(history.location.pathname).toEqual('/');
		});
	});
});
