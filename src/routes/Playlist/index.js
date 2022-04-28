import { Routes, Route } from 'react-router-dom';
import { PlaylistWrapper } from './styles';
import Manager from './Manager';
import CreatePlaylist from './CreatePlaylist';
import EditPlaylist from './EditPlaylist';

export default function Playlist() {
	return (
		<PlaylistWrapper>
			<Routes>
				<Route path="/" element={<Manager />} />
				<Route path="/create" element={<CreatePlaylist />} />
				<Route path="/:playlistIdFromURL" element={<EditPlaylist />} />
			</Routes>
		</PlaylistWrapper>
	);
}
