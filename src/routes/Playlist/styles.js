import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PlaylistWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: ${({ theme }) => theme.topMargin};
	padding: ${({ theme }) => theme.padding};
`;

export const Title = styled.h2`
	font-size: 25px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 40px;
`;

export const Description = styled.p`
	margin: 40px 0 25px;
`;

export const ButtonWrapper = styled.div`
	display: flex;

	* {
		&:first-child {
			margin-right: 25px;
		}
	}
`;

export const Button = styled(Link)`
	background-color: ${({ theme }) => theme.input};
	color: ${({ theme }) => theme.secondary};
	padding: 20px 25px;
	text-align: center;
	cursor: pointer;
`;

export const CreatePlaylistWrapper = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 840px;
	width: 100%;
	padding: 0 20px;
`;

export const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
`;

export const Label = styled.span`
	font-size: 18px;
	margin-bottom: 11px;
	font-weight: 300;
	margin-left: 15px;
`;

export const Input = styled.input`
	width: 100%;
	border: none;
	resize: none;
	padding: 20px;
	border-radius: 3px;
	background-color: ${({ theme }) => theme.primary};
	color: ${({ theme }) => theme.secondary};
`;

export const SubmitButton = styled.button`
	align-self: center;
	font-size: 16px;
	padding: 10px 15px;
	color: #222;
	cursor: pointer;
`;

export const PlaylistInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	margin-top: 0;
`;

export const PlaylistDescription = styled(PlaylistInfo)`
	margin-top: 25px;
	font-weight: 500;
	font-size: 17px;
`;

export const PlaylistVideoWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 40px;
`;

export const PlaylistVideos = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	width: 80vw;
	max-width: 1800px;
	grid-column-gap: 40px;
	grid-row-gap: 60px;

	@media (max-width: 1545px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
		width: calc(100vw - 20px);
	}
`;

export const AddVideosWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 50px;

	* {
		&:last-child {
			margin-top: 25px;
		}
	}
`;

export const AddVideos = styled.p`
	text-align: center;
	margin-top: 10px;
`;
