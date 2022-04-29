import { db } from '../auth';
import { dbDocPlaylists, dbDocVideos } from '.';
import { query, orderBy, onSnapshot, collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from '@firebase/firestore';
import { showError, showSuccess } from '../../swal';

// Add video to playlist based on playlist ID
export const addPlaylistVideo = async (playlistId, videoId, collaboratorName, timeElapsed, isPlaying, isMuted) => {
	try {
		// Error handling
		doErrorHandling(playlistId, videoId);

		// Getting playlist videos
		const videosColRef = collection(db, dbDocPlaylists, playlistId, dbDocVideos);
		const videos = await getDocs(videosColRef);

		// Searching if video already exists in the playlist with the given video ID
		const matchingVideo = videos.docs.find(video => {
			const data = video.data();
			const vidId = data.videoId;
			return vidId === videoId;
		});

		// Add video to playlist if it does not exist
		if (!matchingVideo) {
			const videosColRef = collection(db, dbDocPlaylists, playlistId, dbDocVideos);
			return addDoc(videosColRef, {
				author: collaboratorName || 'Anonymous',
				dateCreated: serverTimestamp(),
				videoId: videoId,
				timeElapsed: timeElapsed || 0,
				isPlaying: isPlaying || true,
				isMuted: isMuted || false
			})
				.then(() => showSuccess('Video added to playlist'))
				.catch(() => showError('Video not added :/'));
		}

		// Otherwise throw video already in playlist error
		return showError('Video is already in the playlist!');
	} catch (err) {
		console.log(err.message);
	}
};

// Live stream playlist videos with websockets under the hood
// Automatically updates data when a change occurs
export const streamPlaylistVideos = (playlistId, snapshot, error) => {
	// Return playlist video ordered by data created (like a queue)
	const videosColRef = collection(db, dbDocPlaylists, playlistId, dbDocVideos);
	const itemsQuery = query(videosColRef, orderBy('dateCreated'));
	return onSnapshot(itemsQuery, snapshot, error);
};

// Delete video from playlist based on playlist and video ID
export const deletePlaylistVideo = (playlistId, videoId) => {
	// Error handling
	doErrorHandling(playlistId, videoId);

	// Delete video
	const videosColRef = doc(db, dbDocPlaylists, playlistId, dbDocVideos, videoId);
	return deleteDoc(videosColRef);
};

function doErrorHandling(playlistId, videoId) {
	if (!playlistId) return showError('No playlist is selected');
	else if (!videoId) return showError('No video ID was provided');
}
