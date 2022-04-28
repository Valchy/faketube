import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { getPlaylist } from '../../services/firestore/playlist';
import useVideoStream from '../../hooks/useVideoStream';
import { Title, PlaylistDescription, PlaylistInfo, PlaylistVideoWrapper, PlaylistVideo } from './styles';

export default function EditPlaylist() {
	const { playlistIdFromURL } = useParams();
	const { playlistVideos, setPlaylistVideos } = useContext(YouTubePlayerContext);
	const [playlistAuthor, setPlaylistAuthor] = useState('');
	const [playlistTitle, setPlaylistTitle] = useState('');
	const [playlistDescription, setPlaylistDescription] = useState('');
	const [playlistDateCreated, setPlaylistDateCreated] = useState(null);

	// Fire up live video stream of changes
	useVideoStream(playlistIdFromURL, setPlaylistVideos);

	// Get playlist info on load
	useEffect(() => {
		getPlaylist(playlistIdFromURL)
			.then(playlist => {
				if (playlist.exists()) {
					const { author, title, description, dateCreated } = playlist.data();
					setPlaylistAuthor(author);
					setPlaylistTitle(title);
					setPlaylistDescription(description);
					setPlaylistDateCreated(dateCreated.seconds);
				} else {
					console.log('playlist-not-found');
				}
			})
			.catch(() => {
				console.log('playlist-get-fail');
			});
	}, [playlistIdFromURL]);

	return (
		<>
			<Title>{playlistTitle || 'loading...'}</Title>
			<PlaylistInfo>{playlistAuthor ? `Author: ${playlistAuthor}` : 'loading...'}</PlaylistInfo>
			<PlaylistInfo>{playlistDateCreated ? new Date(playlistDateCreated * 1000).toLocaleString('en-US') : 'loading...'}</PlaylistInfo>
			<PlaylistDescription>{playlistDescription || 'loading...'}</PlaylistDescription>

			<PlaylistVideoWrapper>
				{playlistVideos.map(() => (
					<PlaylistVideo>hello</PlaylistVideo>
				))}
			</PlaylistVideoWrapper>
		</>
	);
}
