import { useEffect } from 'react';
import { streamPlaylistVideos } from '../services/firestore/playlist/videos';

// Stream playlist videos and update state every time there is a database change
export const useVideoStream = (playlistId, setPlaylistVideos) => {
	useEffect(() => {
		// Error handling
		if (!playlistId) return;

		const unsubscribe = streamPlaylistVideos(
			playlistId,
			querySnapshot => {
				const updatedPlaylistVideos = querySnapshot?.docs?.map(docSnapshot => {
					return { data: docSnapshot.data(), id: docSnapshot.id };
				});

				// Update playlist video state
				setPlaylistVideos(updatedPlaylistVideos);
			},
			error => {
				console.log(error);
			}
		);

		return unsubscribe;
	}, [playlistId, setPlaylistVideos]);
};

export default useVideoStream;
