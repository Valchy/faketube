import { useState, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { createPlaylist } from '../../services/firestore/playlist';
import { CreatePlaylistWrapper, FormLabel, Label, Input, Title } from './styles';

export default function CreatePlaylist() {
	const { collaboratorName, setPlaylistId } = useContext(YouTubePlayerContext);
	const [playlistTitle, setPlaylistTitle] = useState('');
	const [playlistDescription, setPlaylistDescription] = useState('');

	const createPlaylistHandler = e => {
		e.preventDefault();
		createPlaylist(collaboratorName, playlistTitle, playlistDescription)
			.then(docRef => setPlaylistId(docRef.id))
			.catch(reason => console.log(reason.message));
	};

	return (
		<>
			<Title>Create a playlist</Title>
			<CreatePlaylistWrapper>
				<FormLabel>
					<Label htmlFor="playlist-form-title">Title</Label>
					<Input id="playlist-form-title" value={playlistTitle} onChange={({ target }) => setPlaylistTitle(target.value)} />
				</FormLabel>
				<FormLabel>
					<Label htmlFor="playlist-form-title">Description</Label>
					<Input
						id="playlist-form-title"
						value={playlistDescription}
						onChange={({ target }) => setPlaylistDescription(target.value)}
					/>
				</FormLabel>
				<button onClick={createPlaylistHandler}>Create playlist</button>
			</CreatePlaylistWrapper>
		</>
	);
}
