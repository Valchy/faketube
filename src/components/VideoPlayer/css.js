import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${({ theme, showVideoOnSearch }) => (showVideoOnSearch ? 0 : theme.topMargin)};
	padding: ${({ theme, showVideoOnSearch }) => (showVideoOnSearch ? 0 : theme.padding)};
	padding-bottom: 0;
`;

export const YouTubeVideoWrapper = styled.div`
	width: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '400px' : '800px')};
	max-width: 95vw;
	position: ${({ showVideoOnSearch }) => (showVideoOnSearch ? 'fixed' : 'relative')};
	z-index: 8;
	bottom: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '25px' : 'auto')};
	right: ${({ showVideoOnSearch }) => (showVideoOnSearch ? '25px' : 'auto')};

	@media (max-width: 500) {
		bottom: auto;
		right: auto;
		width: 90vw;
	}
`;

export const YouTubeVideo = styled.iframe`
	width: 100%;
	aspect-ratio: 16 / 9;
`;
