import { useContext, useEffect } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { getPlaylist } from '../../services/firestore/playlist';
import QRCode from '../../components/QRCode';
import { Title, ButtonWrapper, Button, Description } from './styles';

export default function Manager() {
	const { playlistId, setPlaylistId } = useContext(YouTubePlayerContext);

	// Get playlist info on load
	useEffect(() => {
		if (playlistId)
			getPlaylist(playlistId).then(playlist => {
				if (!playlist.exists()) setPlaylistId('');
			});
	});

	return (
		<>
			<Title>Playlist Manager</Title>
			<ButtonWrapper>
				<Button to="/playlist/create">New playlist</Button>
				{playlistId && <Button to={`/playlist/${playlistId}`}>View playlist</Button>}
			</ButtonWrapper>
			{playlistId && (
				<>
					<Description>...or share your current one</Description>
					<QRCode url={`${window.location.origin}/playlist/${playlistId}`} />
				</>
			)}
		</>
	);
}
