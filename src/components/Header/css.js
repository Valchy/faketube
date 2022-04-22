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
`;

export const Logo = styled(Link)`
	display: flex;
	align-items: center;
	flex-grow: 1;
	flex-basis: 0;
	color: ${({ theme }) => theme.secondary};
`;

export const LogoImg = styled.img`
	width: 64px;
	margin-right: 10px;
`;

export const LogoText = styled.span`
	font-weight: 600;
	font-size: 42px;
	text-transform: uppercase;
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
`;

export const SearchButtonImg = styled.img`
	width: 24px;
	margin-right: 5px;
`;

export const SearchButtonText = styled.span`
	color: ${({ theme }) => theme.primary};
`;

export const ThemeWrapper = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	justify-content: flex-end;
`;

export const ThemeImg = styled.img`
	width: 32px;
	height: 32px;
`;
