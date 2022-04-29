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
		.then(({ url }) => {
			if (!url || url.length === 0) return showError('Failed fetching download link');

			// Finding a video which can be downloaded
			const video = url.find(({ downloadable, audio, no_audio }) => downloadable && !audio && !no_audio);
			if (!video || !video.url) return showError('No download link found');

			// Downloading the video
			let downloadButton = document.createElement('a');
			downloadButton.href = video.url;
			downloadButton.click();
			setTimeout(() => Swal.close(), 1500);
		})
		.catch(err => {
			// Error handling
			console.log(err.message);
			showError('Download failed :/');
		});
}
