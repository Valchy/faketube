import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { YouTubeVideo, FixedScreenWrapper } from './css';

export default function VideoIframe() {
	const { showVideoOnSearch, videoId } = useContext(YouTubePlayerContext);

	if (!videoId || !showVideoOnSearch) return;

	return (
		<FixedScreenWrapper>
			<YouTubeVideo
				src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=100`}
				frameborder="0"
				allow="autoplay"
				allowFullScreen
			/>
		</FixedScreenWrapper>
	);
}
