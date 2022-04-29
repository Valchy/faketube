import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addUpdatePlaylistCollaborator } from '../../services/firestore/playlist/collaborators';
import { Routes, Route } from 'react-router-dom';
import { PlaylistWrapper } from './styles';
import Manager from './Manager';
import CreatePlaylist from './CreatePlaylist';
import ViewPlaylist from './ViewPlaylist';
import { promptName } from '../../services/swal';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';

export default function Playlist() {
	const { playlistId, collaboratorName, setCollaboratorName, authId } = useContext(YouTubePlayerContext);
	const askFormName = useFnAgainAfter(0);

	useEffect(() => {
		if (!collaboratorName && window.localStorage?.collaboratorName !== 'anonymous')
			askFormName(null, () =>
				promptName(newName => {
					setCollaboratorName(newName);

					if (newName && newName !== 'Anonymous') addUpdatePlaylistCollaborator(playlistId, newName, authId);
				})
			);
	}, [authId, collaboratorName, playlistId, setCollaboratorName, askFormName]);

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
