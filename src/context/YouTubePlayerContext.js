import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import useLocalStorage from '../hooks/useLocalStorage';

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
	const [videoElapsedTime, setVideoElapsedTime] = useState(0);
	const [isPlaying, toggleIsPlaying] = useToggle(true);
	const [isMuted, toggleIsMuted] = useToggle(false);

	// Playlist state
	const [playlistId, setPlaylistId] = useState(window.localStorage?.playlistId || '');
	const [playlistVideos, setPlaylistVideos] = useState([]);
	const [playlistUpdates, setPlaylistUpdates] = useState([]);
	const [playlistCollaborators, setPlaylistCollaborators] = useState([]);

	// General state
	const [firebaseError, setFirebaseError] = useState('');
	const [darkMode, toggleDarkMode] = useToggle(window.localStorage?.darkMode === 'false' ? false : true);
	const [showVideoOnSearch, setShowVideoOnSearch] = useState(false);
	const [collaboratorName, setCollaboratorName] = useState('');
	const [authId, setAuthId] = useState('');

	// Save different states to local storage on change
	useLocalStorage('darkMode', darkMode);
	useLocalStorage('playlistId', playlistId);

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
				videoElapsedTime,
				setVideoElapsedTime,
				isPlaying,
				toggleIsPlaying,
				isMuted,
				toggleIsMuted,
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
				setAuthId,
				firebaseError,
				setFirebaseError
			}}
		>
			{children}
		</YouTubePlayerContext.Provider>
	);
}
