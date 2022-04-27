import styled from 'styled-components';
import ReactYouTube from 'react-youtube';

export const VideoPlayerWrapper = styled.div`
	display: flex;
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
	max-width: 95vw;
	z-index: 8;
	bottom: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '25px' : 'auto')};
	right: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '25px' : 'auto')};
	background-color: #000;

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

export const YouTubeSmall = styled(ReactYouTube)`
	width: 200px;
	height: 112.5px;
`;
