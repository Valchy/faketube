import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { VideoPlayerWrapper, YouTubeVideoWrapper } from './css';
import YouTubeVideo from './YouTubeVideo';

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
				<YouTubeVideo videoId={videoId} checkElapsedTime={checkElapsedTime} />
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}
