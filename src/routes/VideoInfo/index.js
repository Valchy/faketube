import { useContext } from 'react';
import useSWR from 'swr';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import fetcher from '../../utils/fetcher';
import downloadVideo from '../../utils/downloadVideo';
import downloadImg from '../../imgs/download.png';
import addToPlaylistImg from '../../imgs/add-to-playlist.png';
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
	OptionImg
} from './styles';

export default function VideoPlayerRoute() {
	const { videoId } = useContext(YouTubePlayerContext);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);

	// Error handling
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
								<OptionImg src={addToPlaylistImg} />
								<OptionImg onClick={() => downloadVideo(videoId)} src={downloadImg} />
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
