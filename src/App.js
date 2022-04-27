import { YouTubePlayerProvider } from './context/YouTubePlayerContext';
import ThemeProvider from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import SearchResults from './routes/SearchResults';
import VideoInfo from './routes/VideoInfo';
import WelcomeText from './routes/WelcomeText';
import PageNotFound from './routes/PageNotFound';

function App() {
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

	// // Use an effect to authenticate and load the grocery list from the database
	// useEffect(() => {
	// 	console.log('in auth');

	// 	if (playlistId)
	// 		FirestoreServiceAuth.authenticateAnonymously()
	// 			.then(userCredential => {
	// 				setUserId(userCredential.user.uid);
	// 				if (playlistId) {
	// 					console.log('in get playlist');

	// 					FirestoreServicePlaylist.getPlaylist(playlistId)
	// 						.then(playlist => {
	// 							if (playlist.exists()) {
	// 								setError(null);
	// 								console.log('found playlist');
	// 								setPlaylist(playlist.data());
	// 								console.log(playlist.data());
	// 							} else {
	// 								setError('playlist-not-found');
	// 								console.log('playlist-not-found');
	// 								setplaylistId();
	// 							}
	// 						})
	// 						.catch(() => {
	// 							setError('playlist-get-fail');
	// 							console.log('playlist-get-fail');
	// 						});
	// 				}
	// 			})
	// 			.catch(() => setError('anonymous-auth-failed'));
	// }, [playlistId, setplaylistId]);

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
		// <div style={{ display: 'grid', gridTemplateColumns: '50% 50%', gridGap: 10, width: 400 }}>
		// 	<button onClick={createPlaylist}>Create playlist</button>
		// 	<span>ID: {playlistId}</span>

		// 	<button onClick={addVideo}>Add Video</button>
		// 	<input value={videoId} onChange={({ target }) => setVideoId(target.value)} />

		// 	<button onClick={joinUser}>Add user</button>
		// 	<input value={newUser} onChange={({ target }) => setNewUser(target.value)} />

		// 	<button onClick={deleteVideo}>Delete Video</button>
		// 	<input value={delVideo} onChange={({ target }) => setDelVideo(target.value)} />

		// 	<div>
		// 		<h2>saved</h2>
		// 		<p>36YnV9STBqc</p>
		// 		<p>bTecHenYWqA</p>
		// 	</div>
		// 	<div>
		// 		{playlistVideos.map(({ data, id }) => {
		// 			// console.log(video);

		// 			return (
		// 				<p key={id}>
		// 					{data.name} - {id}
		// 				</p>
		// 			);
		// 		})}
		// 	</div>

		// 	<span>{error}</span>
		// </div>
		<YouTubePlayerProvider>
			<ThemeProvider>
				<GlobalStyle />
				<Header />
				<VideoPlayer />
				<Routes>
					<Route path="/" element={<WelcomeText />} />
					<Route path="/search" element={<SearchResults />} />
					<Route path="/video" element={<VideoInfo />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
			</ThemeProvider>
		</YouTubePlayerProvider>
	);
}

export default App;
