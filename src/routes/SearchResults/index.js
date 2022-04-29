import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import numberWithLetters from '../../utils/numberWithLetters';
import { addPlaylistVideo } from '../../services/firestore/playlist/videos';
import downloadVideo from '../../utils/downloadVideo';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';
import { useNavigate } from 'react-router-dom';
import { showConfirm } from '../../services/swal';
import downloadImg from '../../imgs/download.png';
import addToPlaylistImg from '../../imgs/add-to-playlist.png';
import {
	SearchResultsWrapper,
	SearchResults,
	VideoResultWrapper,
	VideoThumbnailWrapper,
	VideoThumbnail,
	VideoDuration,
	VideoInfo,
	VideoInfoTitle,
	VideoInfoData,
	VideoInfoDescription,
	VideoInfoOptions,
	OptionImg
} from './styles';

export default function SearchRoute() {
	const { videoSearch, setVideoSearchResults } = useContext(YouTubePlayerContext);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${videoSearch}`, fetcher);

	// Error handling
	if (error || !data) return;
	// else if (data.data) setVideoSearchResults(data.data.map(({ videoId }) => videoId));

	return (
		<SearchResultsWrapper>
			{data.data && data.data.status !== false && (
				<SearchResults>
					{data.data.map(data => (
						<VideoResult key={data.id.videoId} {...data} />
					))}
				</SearchResults>
			)}
		</SearchResultsWrapper>
	);
}

export const VideoResult = ({ id: { videoId }, title, description, views, snippet: { duration, publishedAt, thumbnails } }) => {
	const { playlistId, setVideoId, collaboratorName } = useContext(YouTubePlayerContext);
	const navigate = useNavigate();
	const addVideoToPlaylist = useFnAgainAfter(2500);
	const startDownload = useFnAgainAfter(5000);

	// Open clicked video
	const videoClickHanlder = vidId => {
		setVideoId(vidId);
		navigate(`/video?w=${vidId}`);
	};

	return (
		<VideoResultWrapper>
			<VideoThumbnailWrapper onClick={() => videoClickHanlder(videoId)}>
				<VideoThumbnail src={thumbnails.default.url} />
				<VideoDuration>{duration}</VideoDuration>
			</VideoThumbnailWrapper>

			<VideoInfo>
				<VideoInfoTitle>{title}</VideoInfoTitle>
				<VideoInfoData>
					{numberWithLetters(views)} • {publishedAt}
				</VideoInfoData>

				<VideoInfoDescription>{description || 'No description was provided'}</VideoInfoDescription>
				<VideoInfoOptions>
					{playlistId && (
						<OptionImg
							onClick={e => addVideoToPlaylist(e, addPlaylistVideo, playlistId, videoId, collaboratorName)}
							src={addToPlaylistImg}
							title="Add to playlist"
							alt="Add to playlist"
						/>
					)}
					<OptionImg
						onClick={e => showConfirm('You want to download this video?', () => startDownload(e, downloadVideo, videoId))}
						src={downloadImg}
						title="Download video"
						alt="Download video"
					/>
				</VideoInfoOptions>
			</VideoInfo>
		</VideoResultWrapper>
	);
};
