import { useState } from 'react';
import { SearchForm, SearchInput, SearchButton, SearchButtonImg, SearchButtonText } from './css';
import searchImg from '../../imgs/searchLogo.svg';

export default function Search({ handleSearch = () => {}, videoSearch = '', placeholder = '' }) {
	const [search, setSearch] = useState(videoSearch);

	return (
		<SearchForm onSubmit={e => handleSearch(e, search)}>
			<SearchInput value={search} onChange={({ target }) => setSearch(target.value)} placeholder={placeholder} />
			<SearchButton>
				<SearchButtonImg src={searchImg} />
				<SearchButtonText>Search</SearchButtonText>
			</SearchButton>
		</SearchForm>
	);
}
