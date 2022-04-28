export default function downloadVideo(videoId, onError = () => {}) {
	if (!videoId) return onError('No video ID was provided');

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
			if (!url || url.length === 0) throw new Error('Failed fetching download link');

			// Finding a video which can be downloaded
			const video = url.find(({ downloadable, audio, no_audio }) => downloadable && !audio && !no_audio);
			if (!video || !video.url) throw new Error('No download link found');

			// Downloading the video
			let downloadButton = document.createElement('a');
			downloadButton.href = video.url;
			downloadButton.click();
		})
		.catch(err => {
			// Error handling
			console.log(err.message);
			onError(err.message);
		});
}
