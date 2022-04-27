import { db } from '../auth';
import { dbDocPlaylists, dbDocCollaborators } from '.';
import { collection, getDocs, setDoc, updateDoc, doc } from '@firebase/firestore';

// Add or update playlist collaborator based on auth_id (session anonymous id)
// This allows anyone to change their name infinite amount of times
// while at the same time not creating new collaborator while also not having proper authentication
export const addUpdatePlaylistCollaborator = async (playlistId, collaboratorName, collaboratorId) => {
	// Error handling
	if (!playlistId) throw new Error('No playlist is selected');
	else if (!collaboratorName) throw new Error('No collaborator name was provided');
	else if (!collaboratorId) throw new Error('No collaborator ID was provided');

	// Getting playlist collaborators
	const collaboratorsColRef = collection(db, dbDocPlaylists, playlistId, dbDocCollaborators);
	const collaborators = await getDocs(collaboratorsColRef);

	// Searching if collaborator already exists in the playlist with the given collaborator ID
	const matchingCollaborator = collaborators.docs.find(collaborator => collaborator.data().auth_id === collaboratorId);

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
