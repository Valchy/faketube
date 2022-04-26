import { ThemeWrapper, ThemeImg } from './css';
import nightImg from '../../imgs/night.png';
import dayImg from '../../imgs/day.png';

export default function Menu({ darkMode }) {
	return (
		<ThemeWrapper>
			<ThemeImg src={darkMode ? nightImg : dayImg} />
		</ThemeWrapper>
	);
}
