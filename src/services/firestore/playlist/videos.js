import { db } from '../auth';
import { dbDocPlaylists, dbDocVideos } from '.';
import { query, orderBy, onSnapshot, collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp } from '@firebase/firestore';

// Add video to playlist based on playlist ID
export const addPlaylistVideo = async (playlistId, videoId, collaboratorName, timeElapsed, isPlaying, isMuted) => {
	// Error handling
	doErrorHandling(playlistId, videoId);

	// Getting playlist videos
	const videosColRef = collection(db, dbDocPlaylists, playlistId, dbDocVideos);
	const videos = await getDocs(videosColRef);

	// Searching if video already exists in the playlist with the given video ID
	const matchingVideo = videos.docs.find(video => video.data().viedoId === videoId);

	// Add video to playlist if it does not exist
	if (!matchingVideo) {
		const videosColRef = collection(db, dbDocPlaylists, playlistId, dbDocVideos);
		return addDoc(videosColRef, {
			author: collaboratorName || 'Unknown',
			dateCreated: serverTimestamp(),
			videoId: videoId,
			timeElapsed: timeElapsed || 0,
			isPlaying: isPlaying || true,
			isMuted: isMuted || false
		});
	}

	// Otherwise throw video already in playlist error
	throw new Error('The video is already in the playlist');
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
	if (!playlistId) throw new Error('No playlist is selected');
	else if (!videoId) throw new Error('No video ID was provided');
}
