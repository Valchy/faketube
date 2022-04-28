import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: ${({ theme }) => theme.padding};
	margin-top: ${({ theme }) => theme.topMargin};
`;

export const Title = styled.h2`
	font-size: 74px;
	font-weight: 700;
	text-align: center;
`;

export const Text = styled.p`
	font-size: 20px;
	font-weight: 500;
	text-align: center;
`;
