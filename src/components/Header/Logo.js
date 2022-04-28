import { LogoWrapper, LogoImg, LogoText } from './styles';
import ytImg from '../../imgs/youtube.svg';

export default function Logo({ setVideoId = () => {}, text = '', alt = '' }) {
	return (
		<LogoWrapper to="/" onClick={() => setVideoId('')} title="Go home">
			<LogoImg src={ytImg} alt={alt} />
			<LogoText>{text}</LogoText>
		</LogoWrapper>
	);
}
