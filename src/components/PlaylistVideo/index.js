import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import { addPlaylistUpdate } from '../../services/firestore/playlist/updates';
import { deletePlaylistVideo } from '../../services/firestore/playlist/videos';
import { useNavigate } from 'react-router-dom';
import deleteImg from '../../imgs/delete.png';
import { showError, showSuccess, showConfirm } from '../../services/swal';
import { Video, Thumbnail, Title, InfoWrapper, Info, Description, Options, DeleteButton } from './styles';

export default function PlaylistVideo({ id, videoId, author, dateCreated }) {
	const { setVideoId, playlistId, collaboratorName } = useContext(YouTubePlayerContext);
	const { data } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);
	const navigate = useNavigate();

	// Open clicked video
	const videoClickHanlder = () => {
		setVideoId(videoId);
		navigate(`/video?w=${videoId}`);
	};

	// Delete selected video
	const deleteVideoHandler = () => {
		showConfirm('You want to delete this video?', () => {
			deletePlaylistVideo(playlistId, id)
				.then(() => {
					addPlaylistUpdate(playlistId, 'delete', collaboratorName);
					showSuccess('Video has been deleted :)');
				})
				.catch(() => showError('Video delete error :/'));
		});
	};

	return (
		<Video>
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
