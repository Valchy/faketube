import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import formatDate from '../../utils/formatDate';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';
import { deletePlaylistVideo } from '../../services/firestore/playlist/videos';
import { useNavigate } from 'react-router-dom';
import deleteImg from '../../imgs/delete.png';
import { Video, Thumbnail, Title, InfoWrapper, Info, Description, Options, DeleteButton } from './styles';

export default function PlaylistVideo({ id, videoId, author, dateCreated }) {
	const { setVideoId, playlistId } = useContext(YouTubePlayerContext);
	const { data } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);
	const navigate = useNavigate();
	const removeVideoFromPlaylist = useFnAgainAfter();

	console.log(data?.data);

	// Open clicked video
	const videoClickHanlder = () => {
		setVideoId(videoId);
		navigate(`/video?w=${videoId}`);
	};

	// Delete selected video
	const deleteVideoHandler = () => {
		deletePlaylistVideo(playlistId, id)
			.then(() => {
				console.log('video deleted');
			})
			.catch(() => {
				console.log('delete video error');
			});
	};

	return (
		<Video title={`Added by ${author} on ${formatDate(dateCreated)}`}>
			<Thumbnail src={data?.data?.thumbnailUrl} onClick={videoClickHanlder} />
			<Title>{data?.data?.title}</Title>
			<Description>
				<InfoWrapper>
					<Info>Added by: {author}</Info>
					<Info>Genre: {data?.data?.genre}</Info>
				</InfoWrapper>
				<Options>
					<DeleteButton onClick={() => deleteVideoHandler()} src={deleteImg} alt={`Delete video ${videoId}`} />
				</Options>
			</Description>
		</Video>
	);
}
