import { useContext } from 'react';
import { ThemeWrapper, MenuImg, PlaylistLink } from './styles';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import nightImg from '../../imgs/night.png';
import dayImg from '../../imgs/day.png';
import playlistImg from '../../imgs/playlist.png';
import playlistImgLight from '../../imgs/light-playlist.png';

export default function Menu({ darkMode }) {
	const { toggleDarkMode } = useContext(YouTubePlayerContext);

	return (
		<ThemeWrapper>
			<MenuImg onClick={toggleDarkMode} data-testid="menu-theme-img" src={darkMode ? nightImg : dayImg} />
			<PlaylistLink to="/playlist">
				<MenuImg data-testid="playlist-img" src={darkMode ? playlistImg : playlistImgLight} />
			</PlaylistLink>
		</ThemeWrapper>
	);
}
