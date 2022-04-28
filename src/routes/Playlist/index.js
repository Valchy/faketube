import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { PlaylistWrapper } from './styles';

export default function Playlist() {
	const { videoId } = useContext(YouTubePlayerContext);
	const { register, handleSubmit, errors } = useForm();

	const download = () => {
		fetch('https://api.onlinevideoconverter.pro/api/convert', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ url: `https://www.youtube.com/watch?v=bTecHenYWqA` })
		})
			.then(res => res.json())
			.then(({ url }) => {
				if (!url || url.length === 0) throw new Error('No download link');

				// Finding a video which can be downloaded
				const video = url.find(({ downloadable, audio, no_audio }) => downloadable && !audio && !no_audio);

				// Downloading the video
				let downloadButton = document.createElement('a');
				downloadButton.href = video.url;
				downloadButton.click();
			})
			.catch(err => console.log(err));
	};

	return (
		<PlaylistWrapper>
			<button onClick={download}>Download Video</button>
			<form>
				<button>Create playlist</button>
			</form>
		</PlaylistWrapper>
	);
}
