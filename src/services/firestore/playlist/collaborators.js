import { db } from '../auth';
import { dbDocPlaylists, dbDocCollaborators } from '.';
import { collection, getDocs, setDoc, updateDoc, doc, onSnapshot } from '@firebase/firestore';
import { showError } from '../../swal';

// Add or update playlist collaborator based on auth_id (session anonymous id)
// This allows anyone to change their name infinite amount of times
// while at the same time not creating new collaborator while also not having proper authentication
export const addUpdatePlaylistCollaborator = async (playlistId, collaboratorName, collaboratorId) => {
	// Error handling
	if (!playlistId) return showError('No playlist is selected');
	else if (!collaboratorName) return showError('No collaborator name was provided');
	else if (!collaboratorId) return showError('No collaborator ID was provided');

	// Getting playlist collaborators
	const collaboratorsColRef = collection(db, dbDocPlaylists, playlistId, dbDocCollaborators);
	const collaborators = await getDocs(collaboratorsColRef);

	// Searching if collaborator already exists in the playlist with the given collaborator ID
	const matchingCollaborator = collaborators.docs.find(collaborator => {
		const data = collaborator.data();
		const collabId = data.auth_id;
		return collabId === collaboratorId;
	});

	// Collaborator document with custom collaborator auth_id
	const collaboratorDocRef = doc(db, dbDocPlaylists, playlistId, dbDocCollaborators, collaboratorId);
	const collaboratorData = {
		name: collaboratorName,
		auth_id: collaboratorId
	};

	// Update collaborator if exists or create a new one with collaborator auth_id
	if (matchingCollaborator) return updateDoc(collaboratorDocRef, collaboratorData);
	else return setDoc(collaboratorDocRef, collaboratorData);
};

// Live stream playlist changes with websockets under the hood
// Automatically updates data when a change occurs
export const streamCollaborators = (playlistId, snapshot, error) => {
	const collaboratorsColRef = collection(db, dbDocPlaylists, playlistId, dbDocCollaborators);
	return onSnapshot(collaboratorsColRef, snapshot, error);
};
