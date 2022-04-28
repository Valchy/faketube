import { useState, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { createPlaylist } from '../../services/firestore/playlist';
import { CreatePlaylistWrapper, FormLabel, Label, Input, Title, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';

export default function CreatePlaylist() {
	const { collaboratorName, setPlaylistId } = useContext(YouTubePlayerContext);
	const [disableSubmit, setDisableSubmit] = useState(false);
	const [playlistTitle, setPlaylistTitle] = useState('');
	const [playlistDescription, setPlaylistDescription] = useState('');
	const navigate = useNavigate();

	// Create playlist handler
	const createPlaylistHandler = e => {
		e.preventDefault();

		// Error handing
		if (disableSubmit) return;
		setDisableSubmit(true);

		// Create playlist and redirect to edit playlist page
		createPlaylist(collaboratorName, playlistTitle, playlistDescription)
			.then(docRef => {
				setPlaylistId(docRef.id);
				navigate(`/playlist/${docRef.id}`);
				// alert
			})
			.catch(reason => console.log(reason.message));
	};

	return (
		<>
			<Title>Create a playlist</Title>
			<CreatePlaylistWrapper>
				<FormLabel>
					<Label htmlFor="playlist-form-title">Name this playlist</Label>
					<Input
						id="playlist-form-title"
						placeholder="Something epic..."
						value={playlistTitle}
						onChange={({ target }) => setPlaylistTitle(target.value)}
					/>
				</FormLabel>
				<FormLabel>
					<Label htmlFor="playlist-form-title">So what is this playlist about?</Label>
					<Input
						as="textarea"
						rows="5"
						placeholder="Your top notch description here..."
						contentEditable={false}
						id="playlist-form-title"
						value={playlistDescription}
						onChange={({ target }) => setPlaylistDescription(target.value)}
					/>
				</FormLabel>
				<SubmitButton onClick={createPlaylistHandler}>Create playlist</SubmitButton>
			</CreatePlaylistWrapper>
		</>
	);
}
