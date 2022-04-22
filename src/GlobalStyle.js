import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		line-height: 1;
		-webkit-text-size-adjust: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		background-color: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.secondary};
	}

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	* {
		margin: 0px;
		padding: 0px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	*::-webkit-scrollbar {
		display: none;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
				border-radius: 0;
		border: none;
		color: inherit;
		display: block;
		outline: 0;
		text-decoration: none;
	}

	input[type="text"]:invalid,
	input[type="password"]:invalid,
	input[type="email"]:invalid,
	select:invalid,
	textarea:invalid {
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
				box-shadow: none;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		opacity: 0;
	}

	textarea:hover, 
	input:hover, 
	textarea:active, 
	input:active, 
	textarea:focus, 
	input:focus,
	button:focus,
	button:active,
	button:hover,
	label:focus {
		outline: 0px !important;
		-webkit-appearance:none;
		-webkit-box-shadow: none !important;
		-moz-box-shadow: none !important;
				box-shadow: none !important;
	}

	input {
		-webkit-border-radius: 0px;
		-moz-border-radius: 0px;
				border-radius: 0px;
		outline: none;
	}

	button {
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
				border-radius: 3px;
		cursor: pointer;
		border: none;
	}

	a {
		text-decoration: none;
	}
`;

export default GlobalStyle;
