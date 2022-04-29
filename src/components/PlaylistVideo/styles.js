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

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Info = styled.span`
	font-size: 12px;
`;

export const Options = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const DeleteButton = styled.img`
	width: 28px;
`;
