import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import axios from 'axios';
import useSWR from 'swr';
import {
	VideoPlayerWrapper,
	YouTubeVideoWrapper,
	YouTubeVideo,
	YouTubeVideoInfo,
	YouTubeVideoTitle,
	YouTubeVideoData,
	YouTubeVideoDescription
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

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<VideoPlayerWrapper>
			<YouTubeVideoWrapper>
				<YouTubeVideo
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
					frameborder="0"
					allow="autoplay"
					allowFullScreen
				/>
				<YouTubeVideoInfo>
					<YouTubeVideoTitle>{data.data.title}</YouTubeVideoTitle>
					<YouTubeVideoData>
						{numberWithCommas(data.data.views)} views • {data.data.datePublished}
					</YouTubeVideoData>
					<YouTubeVideoDescription>{data.data.description}</YouTubeVideoDescription>
				</YouTubeVideoInfo>
			</YouTubeVideoWrapper>
			{/* <SideMenu></SideMenu> */}
		</VideoPlayerWrapper>
	);
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
