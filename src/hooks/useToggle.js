import { useState } from 'react';

// Hook to switch between true / false state
export default function useToggle(initial = true) {
	const [value, setValue] = useState(initial);
	const toggle = () => {
		setValue(prevState => !prevState);
	};

	return [value, toggle];
}
