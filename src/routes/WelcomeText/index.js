import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addUpdatePlaylistCollaborator } from '../../services/firestore/playlist/collaborators';
import { Wrapper, Hello, Quote, GreetImg, ChangeName } from './styles';
import greetImg from '../../imgs/family.png';
import { promptName, showError, showSuccess } from '../../services/swal';

export default function WelcomeText() {
	const { setShowVideoOnSearch, playlistId, setCollaboratorName, authId } = useContext(YouTubePlayerContext);
	useEffect(() => setShowVideoOnSearch(false));

	const changeNameHandler = () => {
		promptName(newName => {
			setCollaboratorName(newName);
			addUpdatePlaylistCollaborator(playlistId, newName, authId)
				.then(() => showSuccess('User name has been set!'))
				.catch(() => showError('User name not changed :/'));
		});
	};

	return (
		<Wrapper>
			<GreetImg src={greetImg} />
			<Hello>FakeTube</Hello>
			<Quote>"Fake it till' you make it"</Quote>
			{playlistId && <ChangeName onClick={changeNameHandler}>Change Name</ChangeName>}
		</Wrapper>
	);
}
