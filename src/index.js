import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { YouTubePlayerProvider } from './context/YouTubePlayerContext';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path="*"
				element={
					<YouTubePlayerProvider>
						<App />
					</YouTubePlayerProvider>
				}
			/>
		</Routes>
	</BrowserRouter>
);
