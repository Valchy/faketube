import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
