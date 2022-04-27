import { YouTube } from './styles';

export default function YouTubeVideo({
	videoId = '',
	timeElapsed = 0,
	isPlaying = true,
	isMuted = false,
	endHandler = () => {},
	pauseHandler = () => {},
	playHandler = () => {},
	changeHandler = () => {}
}) {
	return (
		<YouTube
			videoId={videoId}
			onStateChange={changeHandler}
			onEnd={endHandler}
			onPause={pauseHandler}
			onPlay={playHandler}
			title="YouTube Video"
			allowFullScreen
			opts={{
				playerVars: {
					showinfo: 0,
					modestbranding: 1,
					start: timeElapsed,
					autoplay: isPlaying,
					mute: isMuted
				}
			}}
		/>
	);
}
