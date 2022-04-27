import { useState } from 'react';
import { SearchForm, SearchInput, SearchButton, SearchButtonImg, SearchButtonText } from './styles';
import searchImg from '../../imgs/searchLogo.svg';

export default function Search({ handleSearch = () => {}, videoSearch = '', buttonText = '', placeholder = '' }) {
	const [search, setSearch] = useState(videoSearch);

	return (
		<SearchForm onSubmit={e => handleSearch(e, search)}>
			<SearchInput value={search} onChange={({ target }) => setSearch(target.value)} placeholder={placeholder} />
			<SearchButton>
				<SearchButtonImg src={searchImg} />
				<SearchButtonText>{buttonText}</SearchButtonText>
			</SearchButton>
		</SearchForm>
	);
}
