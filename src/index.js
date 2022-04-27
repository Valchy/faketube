import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

// Log rocket for analytics and bug tracking
import LogRocket from 'logrocket';
LogRocket.init(process.env.LOGROCKET_ID);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="*" element={<App />} />
		</Routes>
	</BrowserRouter>
);
