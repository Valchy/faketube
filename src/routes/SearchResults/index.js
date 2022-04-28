import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import nFormatter from '../../utils/nFormatter';
import { addPlaylistVideo } from '../../services/firestore/playlist/videos';
import downloadVideo from '../../utils/downloadVideo';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';
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
	const { playlistId, videoSearch, setVideoId } = useContext(YouTubePlayerContext);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${videoSearch}`, fetcher);
	const addRemovePlaylistVideo = useFnAgainAfter(1500);
	const startDownload = useFnAgainAfter(5000);

	// Error handling
	if (error || !data) return;

	return (
		<SearchResultsWrapper>
			{data.data && data.data.status !== false && (
				<SearchResults>
					{data.data.map(({ id: { videoId }, title, description, views, snippet: { duration, publishedAt, thumbnails } }) => (
						<VideoResultWrapper key={videoId} to={`/video?w=${videoId}`} onClick={() => setVideoId(videoId)}>
							<VideoThumbnailWrapper>
								<VideoThumbnail src={thumbnails.default.url} />
								<VideoDuration>{duration}</VideoDuration>
							</VideoThumbnailWrapper>

							<VideoInfo>
								<VideoInfoTitle>{title}</VideoInfoTitle>
								<VideoInfoData>
									{nFormatter(views)} • {publishedAt}
								</VideoInfoData>

								<VideoInfoDescription>{description || 'No description was provided'}</VideoInfoDescription>
								<VideoInfoOptions>
									{playlistId && (
										<OptionImg
											onClick={e => addRemovePlaylistVideo(e, addPlaylistVideo, playlistId, videoId)}
											src={addToPlaylistImg}
											title="Add to playlist"
											alt="Add to playlist"
										/>
									)}
									<OptionImg
										onClick={e => startDownload(e, downloadVideo, videoId)}
										src={downloadImg}
										title="Download video"
										alt="Download video"
									/>
								</VideoInfoOptions>
							</VideoInfo>
						</VideoResultWrapper>
					))}
				</SearchResults>
			)}
		</SearchResultsWrapper>
	);
}
