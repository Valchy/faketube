import axios from 'axios';

export const fetcher = url =>
	axios.get(url, {
		headers: {
			'Access-Control-Allow-Origin': true
		}
	});

export default fetcher;
