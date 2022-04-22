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
	return (
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
