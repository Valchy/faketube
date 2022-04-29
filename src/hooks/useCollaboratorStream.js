import { useEffect } from 'react';
import { streamCollaborators } from '../services/firestore/playlist/collaborators';

// Stream playlist updates and update state every time there is a database change
export const useUpdateStream = (playlistId, setPlaylistCollaborators) => {
	useEffect(() => {
		// Error handling
		if (!playlistId) return;

		const unsubscribe = streamCollaborators(
			playlistId,
			querySnapshot => {
				const playlistCollaborators = querySnapshot?.docs?.map(docSnapshot => {
					return { data: docSnapshot.data(), id: docSnapshot.id };
				});

				// Update playlist video state
				setPlaylistCollaborators(playlistCollaborators);
			},
			error => {
				console.log(error);
			}
		);

		return unsubscribe;
	}, [playlistId, setPlaylistCollaborators]);
};

export default useUpdateStream;
