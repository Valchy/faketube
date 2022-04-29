import { db } from '../auth';
import { dbDocPlaylists, dbDocUpdates } from '.';
import { collection, addDoc, serverTimestamp } from '@firebase/firestore';

// Add playlist update to db
export const addPlaylistUpdate = async (playlistId, action, collaboratorName) => {
	// Error handling
	if (!playlistId) throw new Error('No playlist is selected');
	else if (!action) throw new Error('No update action was provided');

	// Create new playlist update with a specific action
	// e.g videoPaused, videoPlayed, videoMuted, videoUnmuted, videoSkipped, videoChanged etc
	const collaboratorDocRef = collection(db, dbDocPlaylists, playlistId, dbDocUpdates);
	addDoc(collaboratorDocRef, {
		author: collaboratorName || 'Anonymous',
		dateCreated: serverTimestamp(),
		action: action
	});
};
