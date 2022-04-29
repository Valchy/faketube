import { db } from '../auth';
import { collection, getDoc, addDoc, updateDoc, doc, serverTimestamp, onSnapshot } from '@firebase/firestore';

export const dbDocPlaylists = 'playlists';
export const dbDocCollaborators = 'collaborators';
export const dbDocVideos = 'videos';
export const dbDocUpdates = 'updates';

// Create a playlist with a title and a description
// A playlist also has a collection of Videos, Collaborators and Updates
export const createPlaylist = (collaboratorName, title, description, removeOnWatch) => {
	const playlistColRef = collection(db, dbDocPlaylists);
	return addDoc(playlistColRef, {
		author: collaboratorName || 'Anonymous',
		dateCreated: serverTimestamp(),
		title: title || 'Untitled Playlist',
		description: description || 'No description was provided',
		removeOnWatch: removeOnWatch || false,
		current: {
			videoId: null,
			nextVideoId: null,
			isPlaying: true,
			isMute: false,
			timeElapsed: 0
		}
	});
};

// Live stream playlist with websockets under the hood
// Automatically updates data when a change occurs
export const streamPlaylist = (playlistId, snapshot, error) => {
	const playlistDocRef = doc(db, dbDocPlaylists, playlistId);
	return onSnapshot(playlistDocRef, snapshot, error);
};

// Get playlist data based on playlist ID
export const getPlaylist = playlistId => {
	const playlistDocRef = doc(db, dbDocPlaylists, playlistId);
	return getDoc(playlistDocRef);
};

// Update playlist data based on playlist ID
export const updatePlaylist = (playlistId, current) => {
	const playlistDocRef = doc(db, dbDocPlaylists, playlistId);
	return updateDoc(playlistDocRef, current).catch(err => console.log(err));
};
