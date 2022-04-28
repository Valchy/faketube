import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { Navbar } from './styles';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

export default function Header() {
	const navigate = useNavigate();
	const { darkMode, videoId, setVideoId, videoSearch, setVideoSearch, setShowVideoOnSearch, toggleDarkMode } =
		useContext(YouTubePlayerContext);

	// On search handler
	const handleSearch = (e, search) => {
		e.preventDefault();
		if (!search) return navigate('/');

		// Make youtube video continue to play in corner
		if (videoId) setShowVideoOnSearch(true);

		// Set state and navigate to url
		setVideoSearch(search);
		navigate(`/search?q=${search}`, { replace: true });
	};

	return (
		<Navbar>
			<Logo setVideoId={setVideoId} text="FakeTube" alt="Cartoonish looking youtube logo" />
			<Search handleSearch={handleSearch} videoSearch={videoSearch} buttonText="Search" placeholder="Go for anything..." />
			<Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
		</Navbar>
	);
}
