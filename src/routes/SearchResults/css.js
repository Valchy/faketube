import styled from 'styled-components';

export const SearchResultsWrapper = styled.div`
	display: flex;
	margin-top: ${({ theme }) => theme.topPadding}px;
	padding: 60px 10px;
	justify-content: center;
`;

export const SearchResults = styled.div`
	display: flex;
	flex-direction: column;
`;

export const VideoResultWrapper = styled.div`
	display: flex;
	width: 800px;
	height: 200px;
	margin-bottom: 20px;
	cursor: pointer;
`;

export const VideoThumbnailWrapper = styled.div`
	position: relative;
	height: 100%;
`;

export const VideoThumbnail = styled.img`
	height: inherit;
`;

export const VideoDuration = styled.span`
	background-color: #000;
	color: #fff;
	font-size: 12px;
	font-weight: 600;
	padding: 3.5px;
	position: absolute;
	bottom: 5px;
	right: 5px;
`;

export const VideoInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
`;

export const VideoInfoTitle = styled.h3`
	font-size: 22px;
	font-weight: 600;
	color: ${({ theme }) => theme.secondary};
`;

export const VideoInfoData = styled.span`
	font-size: 12px;
	color: ${({ theme }) => theme.secondary};
	margin-top: 15px;
`;

export const VideoInfoDescription = styled.p`
	font-size: 15px;
	color: ${({ theme }) => theme.secondary};
	margin-top: 30px;
`;
