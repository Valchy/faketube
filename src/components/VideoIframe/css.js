import styled from 'styled-components';

export const FixedScreenWrapper = styled.div`
	position: fixed;
	z-index: 8;
	bottom: 30px;
	right: 30px;
	width: 400px;
	max-width: 90vw;
`;

export const YouTubeVideo = styled.iframe`
	width: 100%;
	aspect-ratio: 16 / 9;
`;
