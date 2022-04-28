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
	margin-bottom: 30px;
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
	max-width: 800px;
	width: 100%;
`;

export const FormLabel = styled.label`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.span`
	font-size: 22px;
`;

export const Input = styled.input`
	width: 100%;
`;
