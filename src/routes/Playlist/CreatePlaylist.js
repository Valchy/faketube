import { useState, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { createPlaylist } from '../../services/firestore/playlist';
import { CreatePlaylistWrapper, FormLabel, Label, Input, Title, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { showError, showSuccess, showLoading } from '../../services/swal';

export default function CreatePlaylist() {
	const { collaboratorName, setPlaylistId } = useContext(YouTubePlayerContext);
	const [disableSubmit, setDisableSubmit] = useState(false);
	const [playlistTitle, setPlaylistTitle] = useState('');
	const [playlistDescription, setPlaylistDescription] = useState('');
	const navigate = useNavigate();

	// Create playlist handler
	const createPlaylistHandler = e => {
		// Error handing
		e.preventDefault();
		if (disableSubmit) return;

		Swal.fire({
			icon: 'info',
			title: 'Are you sure?',
			text: 'A new playlist will be created and the current one will not be accessible unless via the playlist link',
			showConfirmButton: true,
			showCancelButton: true,
			confirmButtonText: 'Create playlist',
			confirmButtonColor: '#2e9adb',
			cancelButtonText: 'Cancel',
			reverseButtons: true,
			preConfirm: () => {
				setDisableSubmit(true); // Prevents double click bug
				showLoading();

				// Create playlist and redirect to edit playlist page
				createPlaylist(collaboratorName, playlistTitle, playlistDescription)
					.then(docRef => {
						setPlaylistId(docRef.id);
						navigate(`/playlist/${docRef.id}`);
						showSuccess('Your playlist has been created!');
					})
					.catch(reason => {
						console.log(reason.message);
						showError('No playlist created :/');
					});
			}
		});
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
