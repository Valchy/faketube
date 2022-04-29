import { useEffect } from 'react';
import { streamUpdates } from '../services/firestore/playlist/updates';

// Stream playlist videos and update state every time there is a database change
export const usePlaylistChanges = (playlistId, setPlaylistUpdates) => {
	useEffect(() => {
		// Error handling
		if (!playlistId) return;

		const unsubscribe = streamUpdates(
			playlistId,
			querySnapshot => {
				const playlistChanges = querySnapshot?.docs?.map(docSnapshot => {
					return { data: docSnapshot.data(), id: docSnapshot.id };
				});

				// Update playlist video state
				console.log(playlistChanges);
				setPlaylistUpdates(playlistChanges);
			},
			error => {
				console.log(error);
			}
		);

		return unsubscribe;
	}, [playlistId, setPlaylistUpdates]);
};

export default usePlaylistChanges;
