import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { getPlaylist } from '../../services/firestore/playlist';
import PlaylistVideo from '../../components/PlaylistVideo';
import QRCode from '../../components/QRCode';
import { Title, PlaylistDescription, PlaylistInfo, PlaylistVideoWrapper, PlaylistVideos, AddVideosWrapper, AddVideos } from './styles';
import { showError } from '../../services/swal';
import { useNavigate } from 'react-router-dom';

export default function ViewPlaylist() {
	const { playlistIdFromURL } = useParams();
	const { setPlaylistId, playlistVideos } = useContext(YouTubePlayerContext);
	const [playlistAuthor, setPlaylistAuthor] = useState('');
	const [playlistTitle, setPlaylistTitle] = useState('');
	const [playlistDescription, setPlaylistDescription] = useState('');
	const [playlistDateCreated, setPlaylistDateCreated] = useState(null);
	const navigate = useNavigate();

	// Get playlist info on load
	useEffect(() => {
		getPlaylist(playlistIdFromURL)
			.then(playlist => {
				if (playlist.exists()) {
					const { author, title, description, dateCreated } = playlist.data();
					setPlaylistId(playlistIdFromURL);
					setPlaylistAuthor(author);
					setPlaylistTitle(title);
					setPlaylistDescription(description);
					setPlaylistDateCreated(dateCreated.seconds);
				} else {
					showError('Playlist not found');
					setPlaylistId('');
					navigate('/playlist');
				}
			})
			.catch(() => {
				showError('Failed getting playlist');
				setPlaylistId('');
				navigate('/playlist');
			});
	}, [playlistIdFromURL, setPlaylistId, navigate]);

	return (
		<>
			<Title>{playlistTitle || 'loading...'}</Title>
			<PlaylistInfo>{playlistAuthor ? `Author: ${playlistAuthor}` : 'loading...'}</PlaylistInfo>
			<PlaylistInfo>{playlistDateCreated ? `Created on: ${formatDate(playlistDateCreated)}` : 'loading...'}</PlaylistInfo>
			<PlaylistDescription>{playlistDescription || 'loading...'}</PlaylistDescription>
			{playlistVideos.length === 0 && (
				<AddVideosWrapper>
					<AddVideos>Playlist is empty, go add some videos!</AddVideos>
					<AddVideos>...or ask your friends to do so :)</AddVideos>
					<QRCode url={`${window.location.origin}/playlist/${playlistIdFromURL}`} />
				</AddVideosWrapper>
			)}

			<PlaylistVideoWrapper>
				<PlaylistVideos>
					{playlistVideos.map(({ data, id }) => (
						<PlaylistVideo key={id} id={id} {...data} />
					))}
				</PlaylistVideos>
			</PlaylistVideoWrapper>
		</>
	);
}
