import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { VideoPlayerWrapper, YouTubeVideoWrapper, ShowVideoOnSearchOptions } from './styles';
import YouTubeVideo from './YouTubeVideo';

export default function VideoPlayer() {
	const { videoId, setVideoId, showVideoOnSearch, setShowVideoOnSearch, pathname } = useContext(YouTubePlayerContext);

	// Error handling
	if ((!showVideoOnSearch && pathname !== '/video') || !videoId) return;

	const changeHandler = e => {
		const duration = e.target.getDuration();
		const currentTime = e.target.getCurrentTime();
		console.log(e.target.playerInfo, duration, currentTime);
	};

	const endHandler = e => {
		console.log('video ended');
		setVideoId('bTecHenYWqA');
	};

	const playHanlder = e => {
		console.log('video ended');
		setVideoId('bTecHenYWqA');
	};

	const pauseHanlder = e => {
		console.log('video ended');
		setVideoId('bTecHenYWqA');
	};

	return (
		<VideoPlayerWrapper showVideoOnSearch={showVideoOnSearch}>
			<YouTubeVideoWrapper showVideoOnSearch={showVideoOnSearch}>
				{showVideoOnSearch && (
					<ShowVideoOnSearchOptions onClick={() => setShowVideoOnSearch(false)}>Close player</ShowVideoOnSearchOptions>
				)}
				<YouTubeVideo
					videoId={videoId}
					playHanlder={playHanlder}
					pauseHanlder={pauseHanlder}
					endHandler={endHandler}
					changeHandler={changeHandler}
				/>
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}
