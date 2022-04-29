import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import playNext from '../../utils/playNext';
import { VideoPlayerWrapper, YouTubeVideoWrapper, ShowVideoOnSearchOptions, PopupImg } from './styles';
import popupImg from '../../imgs/popup.png';
import YouTubeVideo from './YouTubeVideo';

export default function VideoPlayer() {
	const { videoId, setVideoId, playlistVideos, videoSearchResults, showVideoOnSearch, setShowVideoOnSearch, pathname } =
		useContext(YouTubePlayerContext);
	const navigate = useNavigate();

	// Error handling
	if ((!showVideoOnSearch && pathname !== '/video') || !videoId) return;

	// Play next song on a shuffle basis
	const whatToPlay = () => {
		const _playlistVideos = playlistVideos.map(({ data: { videoId } }) => videoId);
		const nextVideo = playNext(_playlistVideos || videoSearchResults, videoId);
		setVideoId(nextVideo);
	};

	return (
		<VideoPlayerWrapper showVideoOnSearch={showVideoOnSearch}>
			<YouTubeVideoWrapper showVideoOnSearch={showVideoOnSearch}>
				{showVideoOnSearch && (
					<>
						<PopupImg onClick={() => navigate(`/video?w=${videoId}`)} src={popupImg} alt="Video popup image" />
						<ShowVideoOnSearchOptions onClick={() => setShowVideoOnSearch(false)}>Close player</ShowVideoOnSearchOptions>
					</>
				)}
				<YouTubeVideo videoId={videoId} endHandler={whatToPlay} />
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}
