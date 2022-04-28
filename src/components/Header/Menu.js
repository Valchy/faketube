import { ThemeWrapper, MenuImg, PlaylistLink } from './styles';
import nightImg from '../../imgs/night.png';
import dayImg from '../../imgs/day.png';
import playlistImg from '../../imgs/playlist.png';
import playlistImgLight from '../../imgs/light-playlist.png';

export default function Menu({ darkMode }) {
	return (
		<ThemeWrapper>
			<MenuImg data-testid="menu-theme-img" src={darkMode ? nightImg : dayImg} />
			<PlaylistLink to="/playlist">
				<MenuImg data-testid="playlist-img" src={darkMode ? playlistImg : playlistImgLight} />
			</PlaylistLink>
		</ThemeWrapper>
	);
}
