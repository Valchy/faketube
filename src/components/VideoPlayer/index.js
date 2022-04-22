import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { VideoPlayerWrapper, YouTubeVideoWrapper, YouTubeVideo } from './css';

export default function VideoPlayer() {
	const { videoId, showVideoOnSearch, pathname } = useContext(YouTubePlayerContext);

	if ((!showVideoOnSearch && pathname !== '/video') || !videoId) return;

	return (
		<VideoPlayerWrapper showVideoOnSearch={showVideoOnSearch}>
			<YouTubeVideoWrapper showVideoOnSearch={showVideoOnSearch}>
				<YouTubeVideo
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
					frameborder="0"
					allow="autoplay; encrypted-media"
					title="YouTube Video"
					allowFullScreen
				/>
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}
