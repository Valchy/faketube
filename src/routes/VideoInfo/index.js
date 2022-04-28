import { useContext } from 'react';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import axios from 'axios';
import useSWR from 'swr';
import downloadVideo from '../../utils/downloadVideo';
import downloadImg from '../../imgs/download.png';
import {
	VideoPlayerWrapper,
	Wrapper,
	Info,
	Title,
	VideoData,
	DescriptionWrapper,
	DescriptionTitle,
	Description,
	GenreOptionsWrapper,
	Genre,
	Options,
	DownloadButton
} from './styles';

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
			<Wrapper>
				<Info>
					<Title>{data.data.title}</Title>
					<VideoData>
						{numberWithCommas(data.data.views)} views • {data.data.datePublished}
					</VideoData>

					<DescriptionWrapper>
						<GenreOptionsWrapper>
							<Genre>
								<DescriptionTitle>Genre</DescriptionTitle>
								{data.data.genre || 'Unknown'}
							</Genre>
							<Options>
								<DownloadButton onClick={() => downloadVideo(videoId)} src={downloadImg} />
							</Options>
						</GenreOptionsWrapper>
						<Description>
							<DescriptionTitle>Description</DescriptionTitle> {data.data.description}
						</Description>
					</DescriptionWrapper>
				</Info>
			</Wrapper>
		</VideoPlayerWrapper>
	);
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
