import { Routes, Route } from 'react-router-dom';
import { PlaylistWrapper } from './styles';
import Manager from './Manager';
import CreatePlaylist from './CreatePlaylist';

export default function Playlist() {
	return (
		<PlaylistWrapper>
			<Routes>
				<Route path="/" element={<Manager />} />
				<Route path="/create" element={<CreatePlaylist />} />
			</Routes>
		</PlaylistWrapper>
	);
}
