import { ThemeWrapper, MenuImg, PlaylistLink } from './styles';
import nightImg from '../../imgs/night.png';
import dayImg from '../../imgs/day.png';
import playlistImg from '../../imgs/playlist.png';
import playlistImgLight from '../../imgs/light-playlist.png';

export default function Menu({ darkMode, toggleDarkMode = () => {} }) {
	return (
		<ThemeWrapper>
			<MenuImg
				onClick={toggleDarkMode}
				data-testid="menu-theme-img"
				src={darkMode ? nightImg : dayImg}
				title="Toggle dark mode"
				alt="Toggle dark mode"
			/>
			<PlaylistLink to="/playlist">
				<MenuImg
					data-testid="playlist-img"
					src={darkMode ? playlistImg : playlistImgLight}
					title="Open playlist page"
					alt="Open playlist page"
				/>
			</PlaylistLink>
		</ThemeWrapper>
	);
}
