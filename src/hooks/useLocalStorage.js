import { useEffect } from 'react';

// Save state to local storage on change
export default function useLocalStorage(name, state) {
	useEffect(() => {
		window.localStorage[name] = state;
	}, [name, state]);
}
