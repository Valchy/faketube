import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { updatePlaylist } from '../../services/firestore/playlist';
import { VideoPlayerWrapper, YouTubeVideoWrapper, ShowVideoOnSearchOptions, PopupImg } from './styles';
import popupImg from '../../imgs/popup.png';
import YouTubeVideo from './YouTubeVideo';

export default function VideoPlayer() {
	const { videoId, setVideoId, current, playlistId, showVideoOnSearch, setShowVideoOnSearch, pathname } =
		useContext(YouTubePlayerContext);
	const navigate = useNavigate();

	// Error handling
	if ((!showVideoOnSearch && pathname !== '/video') || !videoId) return;

	const changeHandler = e => {
		const duration = e.target.getDuration();
		const currentTime = e.target.getCurrentTime();
		console.log(e.target.playerInfo, duration, currentTime);

		updatePlaylist(playlistId, { ...current, isMuted: !current.isMuted });
	};

	const endHandler = e => {
		console.log('in end');
		if (current.nextVideoId) {
			setVideoId(current.nextVideoId);
		}

		current.isPlaying = false;
		updatePlaylist(playlistId, current);
	};

	return (
		<VideoPlayerWrapper showVideoOnSearch={showVideoOnSearch}>
			<YouTubeVideoWrapper showVideoOnSearch={showVideoOnSearch}>
				{showVideoOnSearch && (
					<>
						<PopupImg onClick={() => navigate(`/video?w=${videoId}`)} src={popupImg} alt="gay" />
						<ShowVideoOnSearchOptions onClick={() => setShowVideoOnSearch(false)}>Close player</ShowVideoOnSearchOptions>
					</>
				)}
				<YouTubeVideo
					videoId={videoId}
					isPlaying={current?.isPlaying}
					isMuted={current?.isMuted}
					timeElapsed={current?.timeElapsed}
					playHanlder={changeHandler}
					pauseHanlder={changeHandler}
					endHandler={endHandler}
					changeHandler={changeHandler}
				/>
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}
