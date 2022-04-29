import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addUpdatePlaylistCollaborator } from '../../services/firestore/playlist/collaborators';
import { Routes, Route } from 'react-router-dom';
import { PlaylistWrapper } from './styles';
import Manager from './Manager';
import CreatePlaylist from './CreatePlaylist';
import ViewPlaylist from './ViewPlaylist';
import { promptName } from '../../services/swal';

export default function Playlist() {
	const { playlistId, collaboratorName, setCollaboratorName, authId } = useContext(YouTubePlayerContext);

	useEffect(() => {
		if (!collaboratorName && window.localStorage?.collaboratorName !== 'anonymous')
			promptName(newName => {
				if (!newName || newName === 'Anonymous') return;

				setCollaboratorName(newName);
				addUpdatePlaylistCollaborator(playlistId, newName, authId);
			});
	}, [collaboratorName, setCollaboratorName, playlistId, authId]);

	return (
		<PlaylistWrapper>
			<Routes>
				<Route path="/" element={<Manager />} />
				<Route path="/create" element={<CreatePlaylist />} />
				<Route path="/:playlistIdFromURL" element={<ViewPlaylist />} />
			</Routes>
		</PlaylistWrapper>
	);
}
