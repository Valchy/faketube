import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from './context/YouTubePlayerContext';
import { authenticateAnonymously } from './services/firestore/auth';
import ThemeProvider from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Alerts from './components/Alerts';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import SearchResults from './routes/SearchResults';
import VideoInfo from './routes/VideoInfo';
import Playlist from './routes/Playlist';
import WelcomeText from './routes/WelcomeText';
import PageNotFound from './routes/PageNotFound';

function App() {
	const { setAuthId, setFirebaseError } = useContext(YouTubePlayerContext);
	// const [user, setUser] = useState('Valeri');
	// const [playlist, setPlaylist] = useState();
	// const [userId, setUserId] = useState();
	// const [error, setError] = useState();
	// const [videoId, setVideoId] = useState('');
	// const [playlistVideos, setPlaylistVideos] = useState([]);

	// const [newUser, setNewUser] = useState('');
	// const [delVideo, setDelVideo] = useState('');

	// Use a custom hook to subscribe to the grocery list ID provided as a URL query parameter
	// const [playlistId, setplaylistId] = useQueryString('playlist');

	// Anonymously authenticate upon app load
	useEffect(() => {
		authenticateAnonymously()
			.then(userCredential => {
				setAuthId(userCredential.user.uid);
			})
			.catch(() => setFirebaseError('anonymous-auth-failed'));
	}, [setAuthId, setFirebaseError]);

	// if (playlistId) {
	// 	console.log('in get playlist');

	// 	FirestoreServicePlaylist.getPlaylist(playlistId)
	// 		.then(playlist => {
	// 			if (playlist.exists()) {
	// 				setError(null);
	// 				console.log('found playlist');
	// 				setPlaylist(playlist.data());
	// 				console.log(playlist.data());
	// 			} else {
	// 				setError('playlist-not-found');
	// 				console.log('playlist-not-found');
	// 				setplaylistId();
	// 			}
	// 		})
	// 		.catch(() => {
	// 			setError('playlist-get-fail');
	// 			console.log('playlist-get-fail');
	// 		});
	// }

	// useEffect(() => {
	// 	if (!playlistId) return;

	// 	const unsubscribe = FirestoreServicePlaylistVideos.streamPlaylistVideos(
	// 		playlistId,
	// 		querySnapshot => {
	// 			const updatedPlaylistVideos = querySnapshot.docs.map(docSnapshot => {
	// 				return { data: docSnapshot.data(), id: docSnapshot.id };
	// 			});
	// 			setPlaylistVideos(updatedPlaylistVideos);
	// 		},
	// 		error => {
	// 			console.log(error);
	// 			setError('grocery-list-item-get-fail');
	// 		}
	// 	);
	// 	return unsubscribe;
	// }, [playlistId, setPlaylistVideos]);

	// const createPlaylist = e => {
	// 	setError(null);

	// 	FirestoreServicePlaylist.createPlaylist(user, 'my title', 'some description')
	// 		.then(docRef => {
	// 			setplaylistId(docRef.id);
	// 			setUser(user);
	// 		})
	// 		.catch(reason => {
	// 			setError(reason.message);
	// 			console.log(reason.message);
	// 		});
	// };

	// const addVideo = e => {
	// 	setError(null);

	// 	FirestoreServicePlaylistVideos.addPlaylistVideo(videoId, playlistId, userId)
	// 		.then(() => console.log('Added video', videoId, playlistId, userId))
	// 		.catch(reason => {
	// 			if (reason.message === 'duplicate-item-error') {
	// 				setError(reason.message);
	// 			} else {
	// 				setError(reason.message);
	// 			}

	// 			console.log(reason.message);
	// 		});
	// };

	// const joinUser = () => {
	// 	FirestoreServicePlaylistUsers.addUpdatePlaylistCollaborator(playlistId, newUser, userId)
	// 		.then(() => console.log('user added'))
	// 		.catch(err => {
	// 			console.log(err);
	// 			setError('add-user-to-list-error');
	// 		});
	// };

	// const deleteVideo = () => {
	// 	FirestoreServicePlaylistVideos.deletePlaylistVideo(playlistId, delVideo)
	// 		.then(data => {
	// 			console.log(data);
	// 			console.log('video deleted');
	// 		})
	// 		.catch(() => {
	// 			console.log('delete video error');
	// 			setError('delete video error');
	// 		});
	// };

	return (
		<ThemeProvider>
			<GlobalStyle />
			<Header />
			<VideoPlayer />
			<Routes>
				<Route path="/" element={<WelcomeText />} />
				<Route path="/search" element={<SearchResults />} />
				<Route path="/video" element={<VideoInfo />} />
				<Route path="/playlist/*" element={<Playlist />} />
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
