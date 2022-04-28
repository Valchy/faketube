import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { Wrapper, Hello, Quote, GreetImg } from './styles';
import greetImg from '../../imgs/family.png';

export default function WelcomeText() {
	const { setShowVideoOnSearch } = useContext(YouTubePlayerContext);
	useEffect(() => setShowVideoOnSearch(false));

	return (
		<Wrapper>
			<GreetImg src={greetImg} />
			<Hello>FakeTube</Hello>
			<Quote>"Fake it till' you make it"</Quote>
		</Wrapper>
	);
}
