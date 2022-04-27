import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: ${({ theme }) => theme.topMargin};
	padding: ${({ theme }) => theme.padding};
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Hello = styled.h1`
	font-size: 44px;
	font-weight: 900;
	margin-top: 30px;
	text-align: center;
`;

export const Quote = styled.h2`
	font-size: 20px;
	margin-top: 10px;
	font-weight: 400;
	text-decoration-color: grey;
	text-align: center;
	font-style: italic;
`;

export const GreetImg = styled.img`
	width: 256px;
`;
