import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.header`
	width: 100vw;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.primary};
	padding: 0 30px;
	position: fixed;
	z-index: 10;
	opacity: 0.984;
	top: 0;
	left: 0;
	right: 0;

	@media (max-width: 640px) {
		padding: 0 5px;
	}
`;

export const LogoWrapper = styled(Link)`
	display: flex;
	align-items: center;
	flex-grow: 1;
	flex-basis: 0;
	margin-right: 35px;
	color: ${({ theme }) => theme.secondary};

	@media (max-width: 640px) {
		margin-right: 0;
	}
`;

export const LogoImg = styled.img`
	width: 64px;
	margin-right: 10px;
`;

export const LogoText = styled.h1`
	font-weight: 600;
	font-size: 30px;

	@media (max-width: 760px) {
		display: none;
	}
`;

export const SearchForm = styled.form`
	width: 40%;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${({ theme }) => theme.secondary};
	background-color: ${({ theme }) => theme.input};
	border: 1px solid ${({ theme }) => theme.border};
	height: 40px;

	@media (max-width: 760px) {
		width: 60%;
	}
`;

export const SearchInput = styled.input`
	text-indent: 15px;
	width: 100%;
	padding-right: 15px;
	background-color: inherit;
	border: none;
	color: ${({ theme }) => theme.secondary};
`;

export const SearchButton = styled.button`
	height: 100%;
	border-radius: 0;
	padding: 10px 15px;
	display: flex;
	align-items: center;

	@media (max-width: 640px) {
		padding: 5px;
	}
`;

export const SearchButtonImg = styled.img`
	width: 24px;
	margin-right: 5px;
`;

export const SearchButtonText = styled.span`
	color: ${({ theme }) => theme.primary};

	@media (max-width: 640px) {
		display: none;
	}
`;

export const ThemeWrapper = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	justify-content: flex-end;
	margin-left: 20px;
`;

export const MenuImg = styled.img`
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

export const PlaylistLink = styled(Link)`
	margin-left: 25px;
`;
