import { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const YouTubePlayerContext = createContext();

export function YouTubePlayerProvider({ children }) {
	// Routing state
	const { pathname, search } = useLocation();
	const q = new URLSearchParams(search).get('q');
	const w = new URLSearchParams(search).get('w');
	const playlist = new URLSearchParams(search).get('playlist');

	// Video search state
	const [videoSearch, setVideoSearch] = useState(q || '');
	const [videoSearchResults, setVideoSearchResults] = useState([]);

	// Video player state
	const [videoId, setVideoId] = useState(w || '');
	const [videoElapsedTime, setVideoElapsedTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isMuted, setIsMuted] = useState(false);

	// Playlist state
	const [playlistId, setPlaylistId] = useState(playlist || '');
	const [playlistVideos, setPlaylistVideos] = useState([]);
	const [playlistUpdates, setPlaylistUpdates] = useState([]);
	const [playlistCollaborators, setPlaylistCollaborators] = useState([]);

	// General state
	const [firebaseError, setFirebaseError] = useState('');
	const [darkMode, setDarkMode] = useState(true);
	const [showVideoOnSearch, setShowVideoOnSearch] = useState(false);
	const [collaboratorName, setCollaboratorName] = useState('');
	const [authId, setAuthId] = useState('');

	return (
		<YouTubePlayerContext.Provider
			value={{
				videoId,
				setVideoId,
				videoSearch,
				setVideoSearch,
				darkMode,
				setDarkMode,
				showVideoOnSearch,
				setShowVideoOnSearch,
				pathname,
				videoSearchResults,
				setVideoSearchResults,
				videoElapsedTime,
				setVideoElapsedTime,
				isPlaying,
				setIsPlaying,
				isMuted,
				setIsMuted,
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
