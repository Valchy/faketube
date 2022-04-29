import styled from 'styled-components';

export const Video = styled.div`
	display: flex;
	flex-direction: column;
	aspect-ratio: 16 / 9;
	cursor: pointer;
`;

export const Thumbnail = styled.img`
	width: 100%;
	aspect-ratio: 16 / 9;
	background-color: #000;
`;

export const Title = styled.h2`
	font-weight: 500;
	font-size: 18px;
	margin-top: 10px;
`;

export const Info = styled.span`
	font-size: 12px;
	margin-top: 15px;
`;

export const DeleteButton = styled.img`
	width: 32px;
`;
