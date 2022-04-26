import { LogoWrapper, LogoImg, LogoText } from './css';
import ytImg from '../../imgs/youtube.svg';

export default function Logo({ setVideoId = () => {}, text = '', alt = '' }) {
	return (
		<LogoWrapper to="/" onClick={() => setVideoId('')}>
			<LogoImg src={ytImg} alt={alt} />
			<LogoText>{text}</LogoText>
		</LogoWrapper>
	);
}
