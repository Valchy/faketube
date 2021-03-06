import styled from 'styled-components';
import ReactYouTube from 'react-youtube';

export const VideoPlayerWrapper = styled.div`
	display: ${({ showVideoOnSearch, pathname, videoId }) => ((!showVideoOnSearch && pathname !== '/video') || !videoId ? 'none' : 'flex')};
	justify-content: center;
	margin-top: ${({ theme, showVideoOnSearch }) => (showVideoOnSearch ? 0 : theme.topMargin)};
	padding: ${({ theme, showVideoOnSearch }) => (showVideoOnSearch ? 0 : theme.padding)};
	padding-bottom: 0;

	@media (max-width: 500px) {
		margin-left: 20px;
	}
`;

export const YouTubeVideoWrapper = styled.div`
	width: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '400px' : '800px')};
	position: ${({ showVideoOnSearch }) => (showVideoOnSearch ? 'fixed' : 'relative')};
	bottom: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '25px' : 'auto')};
	right: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '25px' : 'auto')};
	max-width: 95vw;
	z-index: 8;
	background-color: #000;
	box-shadow: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '0px 5px 10px 5px rgba(0, 0, 0, 0.2)' : 'none')};

	@media (max-width: 500px) {
		bottom: 10px;
		right: 10px;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
	}
`;

export const YouTube = styled(ReactYouTube)`
	width: 100%;
	height: 100%;
	aspect-ratio: 16 / 9;
	align-self: flex-end;

	@media (max-width: 500px) {
		width: calc(100vw - 20px);
	}
`;

export const ShowVideoOnSearchOptions = styled.span`
	color: ${({ theme }) => theme.secondary};
	background-color: ${({ theme }) => theme.background};
	padding: 5px;
	position: absolute;
	top: -30px;
	right: 0;
	cursor: pointer;
`;

export const PopupImg = styled.img`
	position: absolute;
	cursor: pointer;
	top: -8px;
	left: -8px;
	width: 22px;
`;
