import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import useLocalStorage from '../hooks/useLocalStorage';
import usePlaylistStream from '../hooks/usePlaylistStream';

export const YouTubePlayerContext = createContext();

export function YouTubePlayerProvider({ children }) {
	// Routing state
	const { pathname, search } = useLocation();
	const q = new URLSearchParams(search).get('q');
	const w = new URLSearchParams(search).get('w');

	// Video search state
	const [videoSearch, setVideoSearch] = useState(q || '');
	const [videoSearchResults, setVideoSearchResults] = useState([]);

	// Video player state
	const [videoId, setVideoId] = useState(w || '');
	const [current, setCurrent] = useState({
		nextVideoId: null,
		isPlaying: true,
		isMute: false,
		timeElapsed: 0
	});

	// Playlist state
	const [playlistId, setPlaylistId] = useState(window.localStorage?.playlistId || '');
	const [playlistVideos, setPlaylistVideos] = useState([]);
	const [playlistUpdates, setPlaylistUpdates] = useState([]);
	const [playlistCollaborators, setPlaylistCollaborators] = useState([]);

	// General state
	const [darkMode, toggleDarkMode] = useToggle(window.localStorage?.darkMode === 'false' ? false : true);
	const [showVideoOnSearch, setShowVideoOnSearch] = useState(false);
	const [collaboratorName, setCollaboratorName] = useState(window.localStorage?.collaboratorName || '');
	const [authId, setAuthId] = useState('');

	// Save different states to local storage on change
	useLocalStorage('darkMode', darkMode);
	useLocalStorage('playlistId', playlistId);
	useLocalStorage('collaboratorName', collaboratorName);

	// Subscribe globally to playlist changes
	usePlaylistStream(playlistId, setCurrent);

	return (
		<YouTubePlayerContext.Provider
			value={{
				videoId,
				setVideoId,
				videoSearch,
				setVideoSearch,
				darkMode,
				toggleDarkMode,
				showVideoOnSearch,
				setShowVideoOnSearch,
				pathname,
				videoSearchResults,
				setVideoSearchResults,
				current,
				setCurrent,
				playlistId,
				setPlaylistId,
				playlistVideos,
				setPlaylistVideos,
				playlistUpdates,
				setPlaylistUpdates,
				playlistCollaborators,
				setPlaylistCollaborators,
				collaboratorName,
				setCollaboratorName,
				authId,
				setAuthId
			}}
		>
			{children}
		</YouTubePlayerContext.Provider>
	);
}
