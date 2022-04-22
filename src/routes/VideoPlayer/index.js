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
	const fetcher = url => axios.get(url);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	console.log(data.data);

	return (
		<VideoPlayerWrapper>
			<YouTubeVideoWrapper>
				<YouTubeVideo src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} />
				<YouTubeVideoInfo>
					<YouTubeVideoTitle>{data.title}</YouTubeVideoTitle>
					<YouTubeVideoData>
						{data.views} • {data.datePublished}
					</YouTubeVideoData>
					<YouTubeVideoDescription>{data.description}</YouTubeVideoDescription>
				</YouTubeVideoInfo>
			</YouTubeVideoWrapper>
			{/* <SideMenu></SideMenu> */}
		</VideoPlayerWrapper>
	);
}
