import { useEffect } from 'react';
import { streamPlaylist } from '../services/firestore/playlist';

// Stream playlist state and update every time there is a database change
export const usePlaylistStream = (playlistId, setVideoId, setTimeElapsed) => {
	useEffect(() => {
		// Error handling
		if (!playlistId) return;

		const unsubscribe = streamPlaylist(
			playlistId,
			querySnapshot => {
				const data = querySnapshot.data();

				if (data) {
					setVideoId(data.currentVideoId);
					setTimeElapsed(data.currentTimeElapsed);
				}
			},
			error => {
				console.log(error);
			}
		);

		return unsubscribe;
	}, [playlistId, setVideoId, setTimeElapsed]);
};

export default usePlaylistStream;
