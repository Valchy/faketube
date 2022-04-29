import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addUpdatePlaylistCollaborator } from '../../services/firestore/playlist/collaborators';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';
import { Wrapper, Hello, Quote, GreetImg, ChangeName } from './styles';
import greetImg from '../../imgs/family.png';
import { promptName } from '../../services/swal';

export default function WelcomeText() {
	const { setShowVideoOnSearch, playlistId, collaboratorName, setCollaboratorName, authId } = useContext(YouTubePlayerContext);
	const askFormName = useFnAgainAfter(0);

	// Ask for name on initial app load
	useEffect(() => {
		if (!collaboratorName && window.localStorage?.collaboratorName !== 'anonymous')
			askFormName(null, () =>
				promptName(newName => {
					setCollaboratorName(newName);

					if (newName && newName !== 'Anonymous' && playlistId) addUpdatePlaylistCollaborator(playlistId, newName, authId);
				})
			);
	}, [authId, collaboratorName, playlistId, setCollaboratorName, askFormName]);

	// Hide YouTube player on home page
	useEffect(() => setShowVideoOnSearch(false));

	// Collaborator name change handler
	const changeNameHandler = () => {
		promptName(newName => {
			if (!newName || newName === 'Anonymous') return;

			setCollaboratorName(newName);
			addUpdatePlaylistCollaborator(playlistId, newName, authId);
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
