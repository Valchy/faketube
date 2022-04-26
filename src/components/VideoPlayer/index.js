import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { VideoPlayerWrapper, YouTubeVideoWrapper, YouTubeVideo } from './css';

export default function VideoPlayer() {
	const { videoId, showVideoOnSearch, pathname } = useContext(YouTubePlayerContext);

	if ((!showVideoOnSearch && pathname !== '/video') || !videoId) return;

	const checkElapsedTime = e => {
		const duration = e.target.getDuration();
		const currentTime = e.target.getCurrentTime();
		console.log(e.target.playerInfo, duration, currentTime);
	};

	return (
		<VideoPlayerWrapper showVideoOnSearch={showVideoOnSearch}>
			<YouTubeVideoWrapper showVideoOnSearch={showVideoOnSearch}>
				<YouTubeVideo
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
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}
