import { YouTube, YouTubeSmall } from './css';

export default function YouTubeVideo({ videoId = '', bigScreen = true, checkElapsedTime = () => {} }) {
	return bigScreen ? (
		<YouTube
			videoId={videoId}
			onStateChange={e => checkElapsedTime(e)}
			title="YouTube Video"
			allowFullScreen
			opts={{
				playerVars: {
					autoplay: 1,
					start: 0
				}
			}}
		/>
	) : (
		<YouTubeSmall
			videoId={videoId}
			onStateChange={e => checkElapsedTime(e)}
			title="YouTube Video"
			allowFullScreen
			opts={{
				playerVars: {
					autoplay: 1,
					start: 0
				}
			}}
		/>
	);
}
