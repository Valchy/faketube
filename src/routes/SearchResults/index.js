import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import downloadVideo from '../../utils/downloadVideo';
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
	const { videoSearch, setVideoId, setShowVideoOnSearch } = useContext(YouTubePlayerContext);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${videoSearch}`, fetcher);

	// Error handling
	if (error || !data) return;

	const videoClickHandler = vidId => {
		setShowVideoOnSearch(false);
		setVideoId(vidId);
	};

	return (
		<SearchResultsWrapper>
			{data.data && data.data.status !== false && (
				<SearchResults>
					{data.data.map(({ id: { videoId }, title, description, views, snippet: { duration, publishedAt, thumbnails } }) => (
						<VideoResultWrapper key={videoId} to={`/video?w=${videoId}`} onClick={() => videoClickHandler(videoId)}>
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
									<OptionImg src={addToPlaylistImg} title="Add to playlist" alt="Add to playlist" />
									<OptionImg
										onClick={() => downloadVideo(videoId)}
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

function nFormatter(num) {
	if (num >= 1000000000) {
		return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
	}
	if (num >= 1000000) {
		return (num / 1000000).toFixed(0).replace(/\.0$/, '') + 'M';
	}
	if (num >= 1000) {
		return (num / 1000).toFixed(0).replace(/\.0$/, '') + 'K';
	}
	return num;
}
