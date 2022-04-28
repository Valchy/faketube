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
	font-size: 24px;
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

export const PlaylistDescription = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	margin-top: 25px;
`;

export const PlaylistInfo = styled(PlaylistDescription)`
	margin-top: 0;
`;

export const PlaylistVideoWrapper = styled.div`
	display: flex-wrap;
`;

export const PlaylistVideo = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
`;
