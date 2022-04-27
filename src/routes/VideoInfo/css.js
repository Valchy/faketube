import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const YouTubeVideoWrapper = styled.div`
	width: 800px;
	max-width: 95vw;
`;

export const YouTubeVideo = styled.iframe`
	width: 100%;
	aspect-ratio: 16 / 9;
`;

export const YouTubeVideoInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const YouTubeVideoTitle = styled.h1`
	font-size: 22px;
	font-weight: 600;
	margin-top: 20px;
`;

export const YouTubeVideoData = styled.span`
	font-size: 12px;
	margin: 10px 0 20px;
	display: flex;
	flex-direction: column;
`;

export const YouTubeVideoDescription = styled.p`
	font-size: 14px;
	border-top: 1px solid ${({ theme }) => theme.border};
	padding-top: 20px;
	display: block;
`;

export const YouTubeVideoGenre = styled.span`
	margin-top: 10px;
`;
