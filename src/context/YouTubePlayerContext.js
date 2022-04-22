import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const YouTubePlayerContext = createContext();

export function YouTubePlayerProvider({ children }) {
	const search = useLocation().search;
	const q = new URLSearchParams(search).get('q');
	const w = new URLSearchParams(search).get('w');
	const [videoSearch, setVideoSearch] = useState(q || '');
	const [videoId, setVideoId] = useState(w || '');
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
