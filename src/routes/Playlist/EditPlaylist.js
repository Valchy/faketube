import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';

export default function EditPlaylist() {
	const { playlistVideos, setPlaylistVideos } = useContext(YouTubePlayerContext);

	return <div>EditPlaylist</div>;
}
