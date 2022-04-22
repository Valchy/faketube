import { Wrapper, Hello, GreetImg } from './css';
import greetImg from '../../imgs/family.png';

export default function WelcomeText() {
	return (
		<Wrapper>
			<GreetImg src={greetImg} />
			<Hello>Welcome to my YouTube Player</Hello>
		</Wrapper>
	);
}
