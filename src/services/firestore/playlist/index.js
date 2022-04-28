import { db } from '../auth';
import { collection, getDoc, addDoc, doc, serverTimestamp } from '@firebase/firestore';

export const dbDocPlaylists = 'playlists';
export const dbDocCollaborators = 'collaborators';
export const dbDocVideos = 'videos';
export const dbDocUpdates = 'updates';

// Create a playlist with a title and a description
// A playlist also has a collection of Videos, Collaborators and Updates
export const createPlaylist = (userName, title, description, removeOnWatch) => {
	const playlistColRef = collection(db, dbDocPlaylists);
	return addDoc(playlistColRef, {
		author: userName || 'Unknown',
		dateCreated: serverTimestamp(),
		title: title || 'Untitled Playlist',
		description: description || 'No description was provided',
		removeOnWatch: removeOnWatch || false,
		current: {
			videoId: null
		}
	});
};

// Get playlist data based on playlist ID
export const getPlaylist = playlistId => {
	const playlistDocRef = doc(db, dbDocPlaylists, playlistId);
	return getDoc(playlistDocRef);
};
