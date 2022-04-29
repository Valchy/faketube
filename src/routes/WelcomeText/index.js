import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addUpdatePlaylistCollaborator } from '../../services/firestore/playlist/collaborators';
import { Wrapper, Hello, Quote, GreetImg, ChangeName } from './styles';
import greetImg from '../../imgs/family.png';
import { promptName } from '../../services/swal';

export default function WelcomeText() {
	const { setShowVideoOnSearch, playlistId, setCollaboratorName, authId } = useContext(YouTubePlayerContext);
	useEffect(() => setShowVideoOnSearch(false));

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
