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
	font-size: 28px;
	font-weight: 600;
	margin-top: 30px;
`;

export const GreetImg = styled.img`
	width: 256px;
`;
