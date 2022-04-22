import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { YouTubePlayerContext } from './YouTubePlayerContext';

export default function ThemeContext({ children }) {
	const { darkMode } = useContext(YouTubePlayerContext);
	const theme = {
		primary: darkMode ? '#202020' : '#fefefe',
		secondary: darkMode ? '#fff' : '#222',
		background: darkMode ? '#181818' : '#fff',
		border: darkMode ? '#303030' : '#fafafa',
		input: darkMode ? '#121212' : '#fff',
		topPadding: 60
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
