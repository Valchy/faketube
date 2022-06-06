import { showLoading, showError } from '../services/swal';
import Swal from 'sweetalert2';

export default function downloadVideo(videoId) {
	if (!videoId) return showError('No video ID was provided');
	showLoading();

	// 3rd party video converter
	fetch('https://api.onlinevideoconverter.pro/api/convert', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({ url: `https://www.youtube.com/watch?v=${videoId}` })
	})
		.then(res => res.json())
		.then(({ url, mp3Converter, diffConverter }) => {
			if (!url || url.length === 0) return showError('Failed fetching download link');
			let videoUrl = '';

			// Finding a video which can be downloaded
			if (mp3Converter && mp3Converter.length > 0) videoUrl = mp3Converter;
			else {
				// Try finding another mp3 download url
				videoUrl = url.find(({ downloadable, audio, no_audio }) => downloadable && !audio && !no_audio)?.url;

				// Fallback to mp4 if no mp3 link is found
				if (!videoUrl && diffConverter && diffConverter.length > 0) videoUrl = diffConverter;
			}

			// Error handling if no video was found
			if (!videoUrl) return showError('No download link found');

			// Downloading the videoUrl
			let downloadButton = document.createElement('a');
			downloadButton.href = videoUrl;
			downloadButton.click();
			setTimeout(() => Swal.close(), 1500);
		})
		.catch(err => {
			// Error handling
			console.log(err.message);
			showError('Download failed :/');
		});
}
