import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import QRCode from '../../components/QRCode';
import { Title, ButtonWrapper, Button, Description } from './styles';

export default function Manager() {
	const { playlistId } = useContext(YouTubePlayerContext);

	return (
		<>
			<Title>Playlist Manager</Title>
			<ButtonWrapper>
				<Button to="/playlist/create">New playlist</Button>
				{playlistId && <Button to={`/playlist/${playlistId}}`}>Edit playlist</Button>}
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
