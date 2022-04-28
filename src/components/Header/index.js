import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { Navbar } from './styles';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

export default function Header() {
	const { darkMode, videoId, setVideoId, videoSearch, setVideoSearch, toggleShowVideoOnSearch } = useContext(YouTubePlayerContext);
	const navigate = useNavigate();

	const handleSearch = (e, search) => {
		e.preventDefault();
		if (!search) return navigate('/');

		if (videoId) toggleShowVideoOnSearch(true);

		setVideoSearch(search);
		navigate(`/search?q=${search}`, { replace: true });
	};

	return (
		<Navbar>
			<Logo setVideoId={setVideoId} text="FakeTube" alt="Cartoonish looking youtube logo" />
			<Search handleSearch={handleSearch} videoSearch={videoSearch} buttonText="Search" placeholder="Go for anything..." />
			<Menu darkMode={darkMode} />
		</Navbar>
	);
}
