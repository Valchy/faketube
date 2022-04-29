import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { getPlaylist } from '../../services/firestore/playlist';
import PlaylistVideo from '../../components/PlaylistVideo';
import useVideoStream from '../../hooks/useVideoStream';
import { Title, PlaylistDescription, PlaylistInfo, PlaylistVideoWrapper, PlaylistVideos } from './styles';

export default function ViewPlaylist() {
	const { playlistIdFromURL } = useParams();
	const { setPlaylistId, playlistVideos, setPlaylistVideos } = useContext(YouTubePlayerContext);
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
					setPlaylistId(playlistIdFromURL);
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
	}, [playlistIdFromURL, setPlaylistId]);

	return (
		<>
			<Title>{playlistTitle || 'loading...'}</Title>
			<PlaylistInfo>{playlistAuthor ? `Author: ${playlistAuthor}` : 'loading...'}</PlaylistInfo>
			<PlaylistInfo>{playlistDateCreated ? new Date(playlistDateCreated * 1000).toLocaleString('en-US') : 'loading...'}</PlaylistInfo>
			<PlaylistDescription>{playlistDescription || 'loading...'}</PlaylistDescription>

			<PlaylistVideoWrapper>
				<PlaylistVideos>
					{playlistVideos.map(({ data, id }) => (
						<PlaylistVideo key={id} {...data} />
					))}
				</PlaylistVideos>
			</PlaylistVideoWrapper>
		</>
	);
}
