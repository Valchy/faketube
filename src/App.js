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

import * as FirestoreService from './services/firestore';
import { useEffect, useState } from 'react';
import useQueryString from './hooks/useQueryString';

function App() {
	const [user, setUser] = useState('Valeri');
	const [playlist, setPlaylist] = useState();
	const [userId, setUserId] = useState();
	const [error, setError] = useState();

	// Use a custom hook to subscribe to the grocery list ID provided as a URL query parameter
	const [playlistID, setPlaylistID] = useQueryString('playlist');

	// Use an effect to authenticate and load the grocery list from the database
	useEffect(() => {
		FirestoreService.authenticateAnonymously()
			.then(userCredential => {
				setUserId(userCredential.user.uid);
				if (playlistID) {
					FirestoreService.getPlaylist(playlistID)
						.then(playlist => {
							if (playlist.exists) {
								setError(null);
								setPlaylist(playlist.data());
							} else {
								setError('grocery-list-not-found');
								setPlaylistID();
							}
						})
						.catch(() => setError('grocery-list-get-fail'));
				}
			})
			.catch(() => setError('anonymous-auth-failed'));
	}, [playlistID, setPlaylistID]);

	const createPlaylist = e => {
		setError(null);

		FirestoreService.createPlaylist(user, userId)
			.then(docRef => {
				setPlaylistID(docRef.id);
				setUser(user);
			})
			.catch(reason => setError(reason.message));
	};

	const addVideo = e => {
		setError(null);

		FirestoreService.addPlaylistVideo('36YnV9STBqc', 'iXsxdksxTXXLAFfmlu1u', userId)
			.then(() => document.addItemForm.reset())
			.catch(reason => {
				if (reason.message === 'duplicate-item-error') {
					setError(reason.message);
				} else {
					setError('add-list-item-error');
				}
			});
	};

	useEffect(() => {
		console.log(playlist);
	}, [playlist]);

	return (
		<>
			<button onClick={createPlaylist}>Create playlist</button>
			<button onClick={addVideo}>Add Video</button>
			<span>{error}</span>
		</>
		// <YouTubePlayerProvider>
		// 	<ThemeProvider>
		// 		<GlobalStyle />
		// 		<Header />
		// 		<VideoPlayer />
		// 		<Routes>
		// 			<Route path="/" element={<WelcomeText />} />
		// 			<Route path="/search" element={<SearchResults />} />
		// 			<Route path="/video" element={<VideoInfo />} />
		// 			<Route path="/*" element={<PageNotFound />} />
		// 		</Routes>
		// 	</ThemeProvider>
		// </YouTubePlayerProvider>
	);
}

export default App;
