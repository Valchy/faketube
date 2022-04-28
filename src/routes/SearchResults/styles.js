import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchResultsWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${({ theme }) => theme.topMargin};
	padding: ${({ theme }) => theme.padding};

	@media (max-width: 700px) {
		align-items: center;
		width: 100vw;
	}
`;

export const SearchResults = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 700px) {
		align-items: center;
	}
`;

export const VideoResultWrapper = styled(Link)`
	display: flex;
	width: 800px;
	max-width: 90vw;
	height: 200px;
	margin-bottom: 20px;
	cursor: pointer;

	@media (max-width: 700px) {
		flex-direction: column;
		align-items: center;
		width: 100%;
		padding: 10px;
		margin-right: 20px;
		height: auto;
	}
`;

export const VideoThumbnailWrapper = styled.div`
	position: relative;
	height: 100%;

	@media (max-width: 700px) {
		height: auto;
	}
`;

export const VideoThumbnail = styled.img`
	height: inherit;

	@media (max-width: 700px) {
		width: calc(100vw - 20px);
		margin-left: 20px;
	}
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
	width: 100%;

	@media (max-width: 700px) {
		padding-left: 0;
	}
`;

export const VideoInfoTitle = styled.h3`
	font-size: 22px;
	font-weight: 600;
	color: ${({ theme }) => theme.secondary};

	@media (max-width: 700px) {
		font-size: 18px;
		margin-top: 10px;
	}
`;

export const VideoInfoData = styled.span`
	font-size: 12px;
	color: ${({ theme }) => theme.secondary};
	margin-top: 15px;
`;

export const VideoInfoDescription = styled.p`
	font-size: 14px;
	color: ${({ theme }) => theme.secondary};
	margin-top: 30px;
`;

export const VideoInfoOptions = styled.div`
	display: flex;
	align-items: center;
	margin-top: 15px;
`;

export const OptionImg = styled.img`
	cursor: pointer;
	width: 26px;
	height: 26px;
	margin-right: 15px;
`;
