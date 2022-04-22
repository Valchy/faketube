import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const YouTubePlayerContext = createContext();

export function YouTubePlayerProvider({ children }) {
	const search = useLocation().search;
	const q = new URLSearchParams(search).get('q');
	const [videoSearch, setVideoSearch] = useState(q || '');
	const [videoId, setVideoId] = useState('xORdz1Hi9Gc');
	const [darkMode, setDarkMode] = useState(true);

	return (
		<YouTubePlayerContext.Provider
			value={{
				videoId,
				setVideoId,
				videoSearch,
				setVideoSearch,
				darkMode,
				setDarkMode
			}}
		>
			{children}
		</YouTubePlayerContext.Provider>
	);
}
