import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import axios from 'axios';
import useSWR from 'swr';
import {
	VideoPlayerWrapper,
	YouTubeVideoWrapper,
	YouTubeVideoInfo,
	YouTubeVideoTitle,
	YouTubeVideoData,
	YouTubeVideoDescription,
	YouTubeVideoGenre
} from './css';

export default function VideoPlayerRoute() {
	const { videoId } = useContext(YouTubePlayerContext);
	const fetcher = url =>
		axios.get(url, {
			headers: {
				'Access-Control-Allow-Origin': true
			}
		});

	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);

	if (error || !data) return;

	return (
		<VideoPlayerWrapper>
			<YouTubeVideoWrapper>
				<YouTubeVideoInfo>
					<YouTubeVideoTitle>{data.data.title}</YouTubeVideoTitle>
					<YouTubeVideoData>
						{numberWithCommas(data.data.views)} views • {data.data.datePublished}
						<YouTubeVideoGenre>Genre: {data.data.genre || 'Unknown'}</YouTubeVideoGenre>
					</YouTubeVideoData>
					<YouTubeVideoDescription>{data.data.description}</YouTubeVideoDescription>
				</YouTubeVideoInfo>
			</YouTubeVideoWrapper>
		</VideoPlayerWrapper>
	);
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
