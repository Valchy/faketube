import { useSearchParams } from 'react-router-dom';
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
	const [searchParams, setSearchParams] = useSearchParams();
	const { darkMode, videoSearch, setVideoSearch } = useContext(YouTubePlayerContext);
	const [search, setSearch] = useState(videoSearch);

	const handleSearch = e => {
		e.preventDefault();
		setVideoSearch(search);
		setSearchParams({ ...searchParams, q: search });
	};

	return (
		<Navbar>
			<Logo>
				<LogoImg src={ytImg} />
				<LogoText>YTPD</LogoText>
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
