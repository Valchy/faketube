import styled from 'styled-components';

export const VideoPlayerWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 800px;
	max-width: 95vw;
`;

export const YouTube = styled.iframe`
	width: 100%;
	aspect-ratio: 16 / 9;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 22px;
	font-weight: 600;
	margin-top: 20px;
`;

export const VideoData = styled.span`
	font-size: 12px;
	margin: 15px 0 20px;
`;

export const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border-top: 1px solid ${({ theme }) => theme.border};
	padding-top: 15px;
	font-size: 14px;
`;

export const DescriptionTitle = styled.strong`
	font-weight: 600;
	font-size: 16px;
	margin-bottom: 10px;
	margin-right: 10px;
	text-decoration: underline;
`;

export const Description = styled.p`
	display: flex;
	flex-direction: column;
`;

export const Genre = styled.span`
	margin: 10px 0 20px;
`;

export const GenreOptionsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Options = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const DownloadButton = styled.img`
	cursor: pointer;
	width: 22px;
	height: 22px;
`;
