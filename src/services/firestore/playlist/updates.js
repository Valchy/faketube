import { db } from '../auth';
import { dbDocPlaylists, dbDocUpdates } from '.';
import { collection, addDoc, serverTimestamp } from '@firebase/firestore';
import { showError } from '../../swal';

// Add playlist update to db
export const addPlaylistUpdate = async (playlistId, action, collaboratorName) => {
	// Error handling
	if (!playlistId) return showError('No playlist is selected');
	else if (!action) return showError('No update action was provided');

	// Create new playlist update with a specific action
	// e.g videoPaused, videoPlayed, videoMuted, videoUnmuted, videoSkipped, videoChanged etc
	const collaboratorDocRef = collection(db, dbDocPlaylists, playlistId, dbDocUpdates);
	addDoc(collaboratorDocRef, {
		author: collaboratorName || 'Anonymous',
		dateCreated: serverTimestamp(),
		action: action
	});
};
