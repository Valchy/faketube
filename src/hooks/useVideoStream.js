import { useEffect } from 'react';
import useSWR from 'swr';
// import fetcherArray from '../utils/fetcherArray';
import { streamPlaylistVideos } from '../services/firestore/playlist/videos';
import fetcher from '../utils/fetcher';

// Stream playlist videos and uddate state every time there is a database change
export const useVideoStream = (playlistId, setPlaylistVideos) => {
	const { data } = useSWR(
		[`https://youtube.thorsteinsson.is/api/videos/bTecHenYWqA`, `https://youtube.thorsteinsson.is/api/videos/ZY2936lXtDg`],
		fetcher
	);

	useEffect(() => {
		console.log(data);
	}, [data]);

	useEffect(() => {
		// Error handling
		if (!playlistId) return;

		const unsubscribe = streamPlaylistVideos(
			playlistId,
			querySnapshot => {
				const updatedPlaylistVideos = querySnapshot.docs.map(docSnapshot => {
					return { data: docSnapshot.data(), id: docSnapshot.id };
				});

				// Update playlist video state
				setPlaylistVideos(updatedPlaylistVideos);
				console.log(updatedPlaylistVideos);
			},
			error => {
				console.log(error);
			}
		);

		return unsubscribe;
	}, [playlistId, setPlaylistVideos]);
};

export default useVideoStream;
