import { Wrapper, Hello, Quote, GreetImg } from './styles';
import greetImg from '../../imgs/family.png';

export default function WelcomeText() {
	return (
		<Wrapper>
			<GreetImg src={greetImg} />
			<Hello>FakeTube</Hello>
			<Quote>"Fake it till' you make it"</Quote>
		</Wrapper>
	);
}
