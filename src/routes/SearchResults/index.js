import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import axios from 'axios';
import useSWR from 'swr';
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
	VideoInfoDescription
} from './css';

export default function Search() {
	const { videoSearch } = useContext(YouTubePlayerContext);
	const fetcher = url => axios.get(url);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/search?q=${videoSearch}`, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	const handleVideoClick = videoId => {
		// useNavigate(`/${videoId}`);
	};

	return (
		<SearchResultsWrapper>
			<SearchResults>
				{data.data.map(({ id: { videoId }, title, description, views, snippet: { duration, publishedAt, thumbnails } }) => (
					<VideoResultWrapper key={videoId} onClick={() => handleVideoClick(videoId)}>
						<VideoThumbnailWrapper>
							<VideoThumbnail src={thumbnails.default.url} />
							<VideoDuration>{duration}</VideoDuration>
						</VideoThumbnailWrapper>
						<VideoInfo>
							<VideoInfoTitle>{title}</VideoInfoTitle>
							<VideoInfoData>
								{nFormatter(views)} • {publishedAt}
							</VideoInfoData>
							<VideoInfoDescription>{description || 'No description was provided.'}</VideoInfoDescription>
						</VideoInfo>
					</VideoResultWrapper>
				))}
			</SearchResults>
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