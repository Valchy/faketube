import { useEffect, useContext } from 'react';
import { YouTubePlayerContext } from './context/YouTubePlayerContext';
import { authenticateAnonymously } from './services/firestore/auth';
import ThemeProvider from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import SearchResults from './routes/SearchResults';
import VideoInfo from './routes/VideoInfo';
import Playlist from './routes/Playlist';
import WelcomeText from './routes/WelcomeText';
import PageNotFound from './routes/PageNotFound';

function App() {
	const { setAuthId } = useContext(YouTubePlayerContext);

	// Anonymously authenticate upon app load
	useEffect(() => {
		authenticateAnonymously()
			.then(userCredential => {
				setAuthId(userCredential.user.uid);
			})
			.catch(() => console.log('anonymous-auth-failed'));
	}, [setAuthId]);

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
