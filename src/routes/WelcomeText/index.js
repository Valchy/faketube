import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addUpdatePlaylistCollaborator } from '../../services/firestore/playlist/collaborators';
import { Wrapper, Hello, Quote, GreetImg, ChangeName } from './styles';
import greetImg from '../../imgs/family.png';
import { promptName } from '../../services/swal';

export default function WelcomeText() {
	const { setShowVideoOnSearch, playlistId, setCollaboratorName, authId } = useContext(YouTubePlayerContext);

	// Hide YouTube player on home page
	useEffect(() => setShowVideoOnSearch(false));

	// Collaborator name change handler
	const changeNameHandler = () => {
		promptName(newName => {
			if (!newName || newName === 'Anonymous') return;

			setCollaboratorName(newName);
			if (playlistId) addUpdatePlaylistCollaborator(playlistId, newName, authId);
		});
	};

	return (
		<Wrapper>
			<GreetImg src={greetImg} />
			<Hello>FakeTube</Hello>
			<Quote>"Fake it till' you make it"</Quote>
			<ChangeName onClick={changeNameHandler}>Change Name</ChangeName>
		</Wrapper>
	);
}
