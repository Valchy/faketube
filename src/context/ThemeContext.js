import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { YouTubePlayerContext } from './YouTubePlayerContext';

export default function ThemeContext({ children }) {
	const { darkMode } = useContext(YouTubePlayerContext);
	const theme = {
		primary: darkMode ? '#202020' : '#efefef',
		secondary: darkMode ? '#fff' : '#222',
		background: darkMode ? '#181818' : '#fefefe',
		border: darkMode ? '#303030' : '#aaa',
		input: darkMode ? '#121212' : '#fff',
		button: darkMode ? '#121212' : '#efefef',
		padding: '60px 0 250px 0',
		topMargin: '60px'
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
