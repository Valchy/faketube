import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${({ theme }) => theme.topMargin};
	padding: ${({ theme }) => theme.padding};
`;

export const YouTubeVideoWrapper = styled.div`
	font-size: 22px;
`;

export const YouTubeVideo = styled.iframe`
	width: 800px;
	aspect-ratio: 16 / 9;
`;

export const YouTubeVideoInfo = styled.div`
	font-size: 22px;
`;

export const YouTubeVideoTitle = styled.div`
	font-size: 22px;
`;

export const YouTubeVideoData = styled.div`
	font-size: 22px;
`;

export const YouTubeVideoDescription = styled.p`
	font-size: 22px;
`;
