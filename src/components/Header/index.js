import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import {
	Navbar,
	Logo,
	LogoImg,
	LogoText,
	SearchForm,
	SearchInput,
	SearchButton,
	SearchButtonImg,
	SearchButtonText,
	ThemeWrapper,
	ThemeImg
} from './css';
import ytImg from '../../imgs/youtube.svg';
import searchImg from '../../imgs/searchLogo.svg';
import nightImg from '../../imgs/night.png';
import dayImg from '../../imgs/day.png';

export default function Header() {
	const { darkMode, videoSearch, setVideoSearch } = useContext(YouTubePlayerContext);
	const [search, setSearch] = useState(videoSearch);
	const navigate = useNavigate();

	const handleSearch = e => {
		e.preventDefault();
		if (!search) return navigate('/');

		setVideoSearch(search);
		navigate(`/search?${search}`, { replace: true });
	};

	return (
		<Navbar>
			<Logo to="/">
				<LogoImg src={ytImg} />
				<LogoText>FakeTube</LogoText>
			</Logo>
			<SearchForm onSubmit={handleSearch}>
				<SearchInput value={search} onChange={({ target }) => setSearch(target.value)} placeholder="Go for anything..." />
				<SearchButton>
					<SearchButtonImg src={searchImg} />
					<SearchButtonText>Search</SearchButtonText>
				</SearchButton>
			</SearchForm>
			<ThemeWrapper>
				<ThemeImg src={darkMode ? nightImg : dayImg} />
			</ThemeWrapper>
		</Navbar>
	);
}
