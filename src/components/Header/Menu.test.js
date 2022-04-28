import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import darkModeImg from '../../imgs/night.png';
import lightModeImg from '../../imgs/day.png';
import playlistImgDark from '../../imgs/playlist.png';
import playlistImgLight from '../../imgs/light-playlist.png';

describe("Testing header menu's dark mode functionality", () => {
	describe('Testing dark mode', () => {
		test('If theme image is correct based on dark mode', () => {
			render(
				// Use browser router to fix Link element issue
				<BrowserRouter>
					<Menu darkMode={true} />
				</BrowserRouter>
			);

			const themeImg = screen.getByTestId('menu-theme-img').src;
			expect(themeImg).toEqual(`${window.location.origin}/${darkModeImg}`);
		});

		test('If theme image is correct based on dark mode', () => {
			render(
				// Use browser router to fix Link element issue
				<BrowserRouter>
					<Menu darkMode={true} />
				</BrowserRouter>
			);

			const playlistImg = screen.getByTestId('playlist-img').src;
			expect(playlistImg).toEqual(`${window.location.origin}/${playlistImgDark}`);
		});
	});

	describe('Testing light mode', () => {
		test('If playlist image is correct based on dark mode', () => {
			render(
				// Use browser router to fix Link element issue
				<BrowserRouter>
					<Menu darkMode={false} />
				</BrowserRouter>
			);

			const themeImg = screen.getByTestId('menu-theme-img').src;
			expect(themeImg).toEqual(`${window.location.origin}/${lightModeImg}`);
		});

		test('If playlist image is correct based on dark mode', () => {
			render(
				// Use browser router to fix Link element issue
				<BrowserRouter>
					<Menu darkMode={false} />
				</BrowserRouter>
			);

			const playlistImg = screen.getByTestId('playlist-img').src;
			expect(playlistImg).toEqual(`${window.location.origin}/${playlistImgLight}`);
		});
	});
});
