import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { YouTubePlayerContext } from '../../context/YouTubePlayerContext';
import { PlaylistWrapper } from './styles';

export default function Playlist() {
	const { videoId } = useContext(YouTubePlayerContext);
	const { register, handleSubmit, errors } = useForm();

	return (
		<PlaylistWrapper>
			<form>
				<button>Create playlist</button>
			</form>
		</PlaylistWrapper>
	);
}
