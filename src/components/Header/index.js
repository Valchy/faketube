import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { Navbar } from './css';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

export default function Header() {
	const { darkMode, videoId, setVideoId, videoSearch, setVideoSearch, setShowVideoOnSearch } = useContext(YouTubePlayerContext);
	const navigate = useNavigate();

	const handleSearch = (e, search) => {
		e.preventDefault();
		if (!search) return navigate('/');

		if (videoId) setShowVideoOnSearch(true);

		setVideoSearch(search);
		navigate(`/search?q=${search}`, { replace: true });
	};

	return (
		<Navbar>
			<Logo setVideoId={setVideoId} text="FakeTube" />
			<Search handleSearch={handleSearch} videoSearch={videoSearch} placeholder="Go for anything..." />
			<Menu darkMode={darkMode} />
		</Navbar>
	);
}
