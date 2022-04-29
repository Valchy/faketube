import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';
import { useNavigate } from 'react-router-dom';
import { Video, Thumbnail, Title, Info } from './styles';

export default function PlaylistVideo({ videoId, author, isPlaying, isMuted, timeElapsed, dateCreated }) {
	const { setVideoId } = useContext(YouTubePlayerContext);
	const { data } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);
	const navigate = useNavigate();
	const removeVideoFromPlaylist = useFnAgainAfter();

	const videoClickHanlder = () => {
		setVideoId(videoId);
		navigate(`/video?w=${videoId}`);
	};

	return (
		<Video onClick={videoClickHanlder}>
			<Thumbnail src={data?.data?.thumbnailUrl} />
			<Title>{data?.data?.title}</Title>
			<Info></Info>
		</Video>
	);
}
