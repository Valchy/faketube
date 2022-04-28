import { ThemeWrapper, MenuImg, PlaylistLink } from './styles';
import nightImg from '../../imgs/night.png';
import dayImg from '../../imgs/day.png';
import playlistImg from '../../imgs/playlist.png';
import playlistImgLight from '../../imgs/light-playlist.png';

export default function Menu({ darkMode }) {
	return (
		<ThemeWrapper>
			<MenuImg src={darkMode ? nightImg : dayImg} />
			<PlaylistLink to="/playlist">
				<MenuImg src={darkMode ? playlistImg : playlistImgLight} />
			</PlaylistLink>
		</ThemeWrapper>
	);
}
