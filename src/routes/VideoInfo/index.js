import { useContext, useEffect } from 'react';
import useSWR from 'swr';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { addPlaylistVideo } from '../../services/firestore/playlist/videos';
import fetcher from '../../utils/fetcher';
import numberWithCommas from '../../utils/numberWithCommas';
import downloadVideo from '../../utils/downloadVideo';
import useFnAgainAfter from '../../hooks/useFnAgainAfter';
import { showConfirm } from '../../services/swal';
import playNext from '../../utils/playNext';
import downloadImg from '../../imgs/download.png';
import addToPlaylistImg from '../../imgs/add-to-playlist.png';
import nextImg from '../../imgs/next.png';
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
	const { videoId, setVideoId, playlistId, setShowVideoOnSearch, collaboratorName, playlistVideos, videoSearchResults } =
		useContext(YouTubePlayerContext);
	const { data, error } = useSWR(`https://youtube.thorsteinsson.is/api/videos/${videoId}`, fetcher);
	const addVideoToPlaylist = useFnAgainAfter(2500);
	const startDownload = useFnAgainAfter(5000);

	// Make video go to corner on page leave
	useEffect(() => {
		setShowVideoOnSearch(false);
		return () => setShowVideoOnSearch(true);
	}, [setShowVideoOnSearch]);

	// Error handling
	if (error || !data) return;

	// Play next song on a shuffle basis
	const whatToPlay = () => {
		const _playlistVideos = playlistVideos.map(({ data: { videoId } }) => videoId);
		const nextVideo = playNext(_playlistVideos || videoSearchResults, videoId);

		if (nextVideo) setVideoId(nextVideo);
	};

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
								{data.data.genre || 'Anonymous'}
							</Genre>

							<Options>
								<OptionImg onClick={whatToPlay} src={nextImg} title="Play next" alt="Play next" />
								<OptionImg
									onClick={e => addVideoToPlaylist(e, addPlaylistVideo, playlistId, videoId, collaboratorName)}
									src={addToPlaylistImg}
									title="Add to playlist"
									alt="Add to playlist"
								/>
								<OptionImg
									onClick={e =>
										showConfirm('You want to download this video?', () => startDownload(e, downloadVideo, videoId))
									}
									src={downloadImg}
									title="Download video"
									alt="Download video"
								/>
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
