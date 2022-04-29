import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useToggle from '../hooks/useToggle';
import useLocalStorage from '../hooks/useLocalStorage';
import useVideoStream from '../hooks/useVideoStream';
import useUpdateStream from '../hooks/useUpdateStream';
import useCollaboratorStream from '../hooks/useCollaboratorStream';
import usePlaylistStream from '../hooks/usePlaylistStream';
import { showInfo } from '../services/swal';

export const YouTubePlayerContext = createContext();

export function YouTubePlayerProvider({ children }) {
	// Routing state
	const { pathname, search } = useLocation();
	const q = new URLSearchParams(search).get('q');
	const w = new URLSearchParams(search).get('w');

	// Video state
	const [videoSearch, setVideoSearch] = useState(q || '');
	const [videoSearchResults, setVideoSearchResults] = useState([]);
	const [videoId, setVideoId] = useState(w || '');

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

	// Subscribe to global live socket changes
	useVideoStream(playlistId, setPlaylistVideos);
	useUpdateStream(playlistId, setPlaylistUpdates);
	useCollaboratorStream(playlistId, setPlaylistCollaborators);
	// usePlaylistStream(playlistId, setVideoId);

	// useEffect(() => {
	// 	if (playlistUpdates.length > 0) showInfo(playlistUpdates[0]);
	// }, [playlistUpdates]);

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
