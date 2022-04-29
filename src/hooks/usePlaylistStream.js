import { useEffect } from 'react';
import { streamPlaylist } from '../services/firestore/playlist';

// Stream playlist state and update every time there is a database change
export const usePlaylistStream = (playlistId, setCurrent) => {
	useEffect(() => {
		// Error handling
		if (!playlistId) return;

		const unsubscribe = streamPlaylist(
			playlistId,
			querySnapshot => setCurrent(querySnapshot?.data()?.current),
			error => {
				console.log(error);
			}
		);

		return unsubscribe;
	}, [playlistId, setCurrent]);
};

export default usePlaylistStream;
