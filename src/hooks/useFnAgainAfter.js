import { useState } from 'react';

// Allow a function to be called once X amount of ms
export default function useFnAgainAfter(ms = 1000) {
	const [clicked, setClicked] = useState(false);
	const callFn = (e, fn = () => {}, ...args) => {
		// Error handling
		if (clicked) return;

		e?.preventDefault();
		setClicked(true);
		if (ms !== 0) setTimeout(() => setClicked(false), ms);
		fn(...args);
	};

	return callFn;
}
